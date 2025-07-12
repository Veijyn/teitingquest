// utils/calculate-effective-stats.ts
import { PlayerStats } from '../models/player-stats.model';
import { Item } from '../models/item.model';

export function calculateEffectiveStats(player: PlayerStats): PlayerStats {
  const now = new Date();

  const numericStats: (keyof PlayerStats)[] = ['strength', 'agility', 'intelligence', 'hp'];

  const bonuses: Record<keyof PlayerStats, number> = {
      strength: 0,
      agility: 0,
      intelligence: 0,
      hp: 0,
      money: 0,
      level: 0,
      experience: 0,
      questsCompleted: 0,
      equippedItems: 0,
      activeBuffs: 0,
      lastBuffFoodUsedAt: 0,
      lastPotionUsedAt: 0,
      quizResults: 0
  };

  // Ausrüstung
  for (const item of player.equippedItems ?? []) {
    if (!item.bonusStats) continue;

    for (const key in item.bonusStats) {
      const stat = key as keyof PlayerStats;
      const val = item.bonusStats[stat];
      if (numericStats.includes(stat) && typeof val === 'number') {
        bonuses[stat] += val; // ✅ berücksichtigt auch negative Werte
      }
    }
  }

  // Aktive Buffs
  for (const item of (player.activeBuffs ?? [])) {
    const validUntil = (item as any).validUntil as Date | undefined;
    if (validUntil && new Date() > new Date(validUntil)) continue;

    if (!item.bonusStats) continue;

    for (const key in item.bonusStats) {
      const stat = key as keyof PlayerStats;
      const val = item.bonusStats[stat];
      if (numericStats.includes(stat) && typeof val === 'number') {
        bonuses[stat] += val; // ✅ auch hier: negativ erlaubt
      }
    }
  }

  return {
    ...player,
    strength: player.strength + bonuses.strength,
    agility: player.agility + bonuses.agility,
    intelligence: player.intelligence + bonuses.intelligence,
    hp: player.hp + bonuses.hp,
  };
}
