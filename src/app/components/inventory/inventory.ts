import { Component, OnInit } from '@angular/core';
import { InventoryService } from '@core/services/inventory.service';
import { PlayerService } from '@core/services/player.service';
import { Item } from '@core/models/item.model';
import { GameSaveService } from '@core/services/game-save.service';
import { PlayerStats } from '@core/models/player-stats.model';
import { ToastService } from '@views/toasts/toast.service';
import { SoundService } from '@core/services/sound.service';

type NumericStatKey = 'hp' | 'strength' | 'agility' | 'intelligence' | 'money' | 'experience' | 'level';

type NumericStats = Pick<PlayerStats, NumericStatKey>;

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss']
})
export class InventoryComponent implements OnInit {
  items: Item[] = [];
  statIcon(stat: string): string {
    switch (stat) {
      case 'strength': return '🗡️';
      case 'agility': return '🎯';
      case 'intelligence': return '🧠';
      case 'hp': return '❤️';
      case 'money': return '💰';
      case 'level': return '⭐';
      case 'experience': return '📘';
      default: return '';
    }
  }


  constructor(private inventoryService: InventoryService, private playerService: PlayerService,
    private gameSave: GameSaveService, private toastService: ToastService, private soundService: SoundService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(items => {
      this.items = items.filter(item => item.available !== false).sort((a, b) => {
        const order = ['equipment', 'consumable', 'buff', 'quest'];
        return order.indexOf(a.type) - order.indexOf(b.type);
      });
    });
  }

  getGermanItemType(type: string): string {
    switch (type) {
      case 'equipment': return 'Ausrüstung';
      case 'consumable': return 'Verbrauchbar';
      case 'buff': return 'Buff';
      case 'quest': return 'Quest-Gegenstand';
      default: return type;
    }
  }

  useItem(item: Item) {
    const now = Date.now();
    const durationMs = 1000 * 60 * 5;
    const stats = this.playerService.getSnapshot();

    const isBuffFood = item.name?.endsWith('(Bufffood)');
    const isPotion = item.id === 'potion';

    // Bufffood-Cooldown prüfen
    if (isBuffFood && stats?.lastBuffFoodUsedAt) {
      const last = new Date(stats.lastBuffFoodUsedAt).getTime();
      if (now - last < 1000 * 60 * 5) {
        this.toastService.show('Du musst 5 Minuten warten, bevor du weiteres Bufffood verwenden kannst.');
        return;
      }
    }

    // Potion-Cooldown prüfen
    if (isPotion && stats?.lastPotionUsedAt) {
      const last = new Date(stats.lastPotionUsedAt).getTime();
      if (now - last < 1000 * 60 * 5) {
        this.toastService.show('Du musst 5 Minuten warten, bevor du einen weiteren Trank trinken kannst.');
        return;
      }
    }

    // Bonuswerte für Tooltip sammeln
    const buffs = Object.entries(item.bonusStats ?? {}).map(([key, val]) => {
      const amount = typeof val === 'number' ? val : 0;
      return `${this.statIcon(key)} +${amount}`;
    });

    // Buff-Item mit Dauer
    if (item.type === 'buff' && !isPotion) {
      this.playerService.addBuff(item, durationMs);

      // Cooldown-Zeit setzen
      if (isBuffFood) {
        this.playerService.updateStats({ lastBuffFoodUsedAt: new Date().toISOString() });
        setTimeout(() => {
        this.playerService.removeExpiredBuffs();
      }, durationMs);
      }
      if (isPotion) {
        this.playerService.updateStats({ lastPotionUsedAt: new Date().toISOString() });
      }    

      this.soundService.playEffect('trank-benutzen');
      this.inventoryService.removeSingleItem(item);
      this.toastService.show(`Buff aktiv: ${buffs.join(', ')}`);
    }

    // Consumable → direkte Stats-Änderung
    if (item.type === 'consumable' || isPotion) {
      const statsToApply: Partial<NumericStats> = {};

      for (const [key, val] of Object.entries(item.bonusStats ?? {})) {
        if (typeof val === 'number' && (key as NumericStatKey)) {
          statsToApply[key as NumericStatKey] = val;
        }
      }

      this.soundService.playEffect('item-benutzen');
      this.playerService.updateStats(statsToApply);
      this.inventoryService.removeSingleItem(item); // 👈 nur EIN Item entfernen!
      this.toastService.show(`Verbraucht: ${buffs.join(', ')}`);
    }

    this.gameSave.updateCurrentGame();
  }

  checkForUnlockedEquipment() {
    const player = this.playerService.getSnapshot() ?? { questsCompleted: 0 };
    const inventory = this.inventoryService.getSnapshot();

    const unlocked: Item[] = [];

    const updated = inventory.map(item => {
      if (
        item.type === 'equipment' &&
        item.questsRequired != null &&
        item.questsRequired <= (player.questsCompleted ?? 0) &&
        item.available !== true
      ) {
        unlocked.push({ ...item, available: true });
        return { ...item, available: true };
      }
      return item;
    });

    if (unlocked.length > 0) {
      this.inventoryService.setInventory(updated);
      // optional: notify the player
      //console.log('Neue Ausrüstung verfügbar:', unlocked.map(i => i.name).join(', '));
    }
  }

  toggleEquip(item: Item) {
    const equipped = !item.equipped;

    // 1. Inventory aktualisieren
    this.inventoryService.updateEquippedStatus(item.id, equipped);

    // 2. Neuestes Item holen
    const latestItem = this.inventoryService.getSnapshot().find(i => i.id === item.id);
    if (!latestItem || !latestItem.slot) {
      console.warn('Kein gültiger Slot-Item gefunden für Equip:', latestItem);
      return;
    }

    // 3. Player aktualisieren
    if (equipped) {
      this.playerService.equipItem(latestItem);
    } else {
      this.playerService.unequipItem(latestItem.slot);
    }

    // 4. Spiel speichern
    this.gameSave.updateCurrentGame();
  }

}

