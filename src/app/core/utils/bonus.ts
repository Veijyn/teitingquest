import { Item } from '../models/item.model';
import { PlayerStats } from '../models/player-stats.model';

export function calculateStatBonuses(items: Item[], player?: PlayerStats): Partial<PlayerStats> {
    type NumericPlayerStat = 'strength' | 'agility' | 'intelligence' | 'hp' | 'money' | 'level' | 'experience' | 'questsCompleted';

  const bonuses: Partial<PlayerStats> = {};
  const now = new Date();

  const numericStats: NumericPlayerStat[] = [
    'strength', 'agility', 'intelligence', 'hp', 'money', 'level', 'experience', 'questsCompleted'
  ];

  // Initialisieren
  for (const stat of numericStats) {
    bonuses[stat] = 0;
  }

  for (const item of items) {
    if (!item.bonusStats) continue;

    // Bei Buffs: nur wenn aktiv
    if (item.type === 'buff') {
      const durationMs = 1000 * 60 * 30; // 30 Minuten
      if (item.acquiredAt && now.getTime() - new Date(item.acquiredAt).getTime() > durationMs) {
        continue;
      }
    }

    for (const key in item.bonusStats) {
      const stat = key as NumericPlayerStat;
      const val = item.bonusStats[stat] ?? 0;

      if (typeof val === 'number') {
        bonuses[stat] = (bonuses[stat] as number) + val;
      }
    }
  }

  return bonuses;
}

