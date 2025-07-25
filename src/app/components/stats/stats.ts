import { Component, OnInit } from '@angular/core';
import { InventoryService } from '@core/services/inventory.service';
import { PlayerService } from '@core/services/player.service';
import { PlayerStats } from '@core/models/player-stats.model';
import { calculateStatBonuses } from '@core/utils/bonus';
import { EquipmentSlot, Item } from '@core/models/item.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrls: ['./stats.scss']
})
export class StatsComponent implements OnInit {
  baseStats: PlayerStats | null = null;
  bonusStats: Partial<PlayerStats> = {};
  equippedItems: Item[] = [];
  activeBuffs: Item[] = [];

  XP_TABLE = [0, 100, 200, 350, 500, 700, 950, 1200, 1500, 1900];

  // Slots in gewünschter Reihenfolge
  equipmentSlots: EquipmentSlot[] = [
    'head', 'chest', 'hands', 'legs', 'feet',
    'weapon', 'back', 'shoulders', 'belt', 'wrist'
  ];

  slotLabels: Record<EquipmentSlot, string> = {
    head: 'Kopf',
    chest: 'Brust',
    hands: 'Hände',
    legs: 'Beine',
    feet: 'Füße',
    weapon: 'Waffe',
    back: 'Rücken',
    shoulders: 'Schultern',
    belt: 'Gürtel',
    wrist: 'Handgelenke'
  };

  statsKeys: (keyof PlayerStats)[] = [
    'hp', 'strength', 'agility', 'intelligence',
    'money'
  ];

  constructor(
    private playerService: PlayerService,
    private inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    this.playerService.getPlayer().subscribe(p => {
      if (!p) return;
      this.playerService.removeExpiredBuffs();
      const effectiveStats = this.playerService.getEffectiveStats();
      if (!effectiveStats) return;

      this.baseStats = p;
      this.equippedItems = p.equippedItems ?? [];
      this.bonusStats = {
        strength: effectiveStats.strength - p.strength,
        agility: effectiveStats.agility - p.agility,
        intelligence: effectiveStats.intelligence - p.intelligence,
        hp: effectiveStats.hp - p.hp
      };
      this.activeBuffs = (p.activeBuffs ?? []).filter(buff => {
        const validUntil = (buff as any).validUntil as Date;
        return !validUntil || validUntil > new Date();
      });
    });
  }

  getBonus(key: keyof PlayerStats): number {
    const value = this.bonusStats?.[key];
    return typeof value === 'number' ? value : 0;
  }

  getBonusPrefix(key: keyof PlayerStats): string {
    const bonus = this.getBonus(key);
    return bonus > 0 ? '+' : '';
  }

  // Hilfsfunktion für Tooltip
  formatBuffTooltip(buff: Item): string {
    const untilRaw = (buff as any).validUntil;
    const until = typeof untilRaw === 'string' ? new Date(untilRaw) : untilRaw;
    const timeLeft = until instanceof Date
      ? Math.ceil((until.getTime() - Date.now()) / 60000)
      : null;

    const bonuses = Object.entries(buff.bonusStats ?? {})
      .map(([key, val]) => `${this.getStatLabel(key)} +${val}`)
      .join(', ');

    return `${bonuses}${timeLeft !== null ? `\n🕒 ${timeLeft} Min aktiv` : ''}`;
  }

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

  getEquippedItem(slot: EquipmentSlot): Item | undefined {
    return this.equippedItems.find(i => i.slot === slot);
  }

  getXpPercent(): number {
    const currentXp = this.baseStats?.experience ?? 0;
    const xpForNext = 100; // Beispiel – oder dynamisch
    return Math.min((currentXp / xpForNext) * 100, 100);
  }

  getXpProgress(): number {
    const stats = this.baseStats;
    if (!stats) return 0;

    const currentLevel = stats.level ?? 1;
    const totalXp = stats.experience ?? 0;

    if (currentLevel >= this.XP_TABLE.length) return 100; // Max-Level erreicht

    const xpAtCurrent = this.XP_TABLE[currentLevel - 1];
    const xpAtNext = this.XP_TABLE[currentLevel];

    const progress = ((totalXp - xpAtCurrent) / (xpAtNext - xpAtCurrent)) * 100;

    return Math.max(0, Math.min(100, Math.floor(progress)));
  }

  getStatBonuses(item: Item | undefined): string[] {
    if (!item?.bonusStats) return [];
    return Object.entries(item.bonusStats).map(([stat, val]) => {
      const icon = this.statIcon(stat);
      return `${icon} +${val}`;
    });
  }

  getBonusSourcesTooltip(stat: keyof PlayerStats): string {
    const sources: string[] = [];

    const allItems = [...(this.baseStats?.equippedItems ?? []), ...(this.activeBuffs ?? [])];

    for (const item of allItems) {
      const bonus = item.bonusStats?.[stat];
      if (bonus && typeof bonus === 'number') {
        const label = item.type === 'buff' ? `Buff: ${item.name}` : item.name;
        sources.push(`+${bonus} durch ${label}`);
      }
    }

    return sources.length > 0 ? sources.join('\n') : 'Kein Bonus';
  }

  isNumericBonus(key: keyof PlayerStats): boolean {
    const numericKeys: (keyof PlayerStats)[] = ['strength', 'agility', 'intelligence', 'hp'];
    return numericKeys.includes(key);
  }

  gilAmount: number = 0;

  changeGil() {
    if (this.gilAmount === 0) return;

    if (this.gilAmount > 0) {
      this.playerService.addMoney(this.gilAmount);
    } else {
      const success = this.playerService.pay(Math.abs(this.gilAmount));
      if (!success) {
        alert('Nicht genug Gil!');
      }
    }

    this.gilAmount = 0; // zurücksetzen
  }


  getStatLabel(stat: string): string {
    const labels: Record<string, string> = {
      hp: 'HP',
      strength: 'Stärke',
      agility: 'Geschicklichkeit',
      intelligence: 'Intelligenz',
      money: 'Gil',
      level: 'Level',
      experience: 'Erfahrung'
    };
    return labels[stat] ?? stat;
  }

  isBonusPositive(stat: keyof PlayerStats): boolean {
    return Number(this.bonusStats[stat] ?? 0) > 0;
  }

  getTotal(stat: keyof PlayerStats): number {
    const base = this.baseStats?.[stat] ?? 0;
    const bonus = this.bonusStats[stat] ?? 0;
    return (base as number) + (bonus as number);
  }

  hpEditing: boolean = false;
hpAmount: number = 0;

toggleHpEditing() {
  this.hpEditing = !this.hpEditing;
}

changeHp() {
  if (this.hpAmount === 0) return;
  this.playerService.heal(this.hpAmount); // negativ oder positiv erlaubt
  this.hpAmount = 0;
}

  gilEditing: boolean = false;

  toggleGilEditing() {
    this.gilEditing = !this.gilEditing;
  }

}
