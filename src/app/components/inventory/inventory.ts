import { Component, OnInit } from '@angular/core';
import { InventoryService } from '@core/services/inventory.service';
import { PlayerService } from '@core/services/player.service';
import { Item } from '@core/models/item.model';
import { GameSaveService } from '@core/services/game-save.service';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss']
})
export class InventoryComponent implements OnInit {
  items: Item[] = [];

  constructor(private inventoryService: InventoryService, private playerService: PlayerService, private gameSave: GameSaveService) {}

  ngOnInit(): void {
  this.inventoryService.getInventory().subscribe(items => {
    this.items = items.filter(item => item.available !== false).sort((a, b) => {
    const order = ['equipment', 'consumable', 'buff', 'quest'];
    return order.indexOf(a.type) - order.indexOf(b.type);
  });
  });
}

  useItem(item: Item) {
    // Hier kommt gleich deine Logik rein
    console.log('Benutzt:', item.name);
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

