// utils/calculate-effective-stats.ts
import { PlayerStats } from '../models/player-stats.model';
import { Item } from '../models/item.model';

export function calculateEffectiveStats(player: PlayerStats): PlayerStats {
    const baseStats = { ...player };

    const now = new Date();

    const numericStats: (keyof PlayerStats)[] = [
        'strength', 'agility', 'intelligence', 'hp', 'money', 'level', 'experience', 'questsCompleted'
    ];
    const bonuses = numericStats.reduce((acc, stat) => {
        acc[stat] = 0;
        return acc;
    }, {} as Record<keyof PlayerStats, number>);

    // Ausrüstung berücksichtigen
    const equipped = player.equippedItems ?? [];
    for (const item of equipped) {
        if (item.bonusStats) {
            for (const key in item.bonusStats) {
                const stat = key as keyof PlayerStats;
                const bonusVal = item.bonusStats[stat] ?? 0;

                if (typeof bonusVal === 'number' && typeof bonuses[stat] === 'number') {
                    (bonuses[stat] as number) += bonusVal;
                }
            }
        }
    }

    // Buffs berücksichtigen
    const buffs = (player.activeBuffs ?? []).filter(buff => {
        const validUntil = (buff as any).validUntil as Date | undefined;
        return !validUntil || new Date(validUntil) > now;
    });

    for (const buff of buffs) {
        if (buff.bonusStats) {
            for (const key in buff.bonusStats) {
                const stat = key as keyof PlayerStats;
                const bonusVal = buff.bonusStats[stat] ?? 0;

                if (typeof bonusVal === 'number' && typeof bonuses[stat] === 'number') {
                    (bonuses[stat] as number) += bonusVal;
                }
            }
        }
    }

    return {
        ...baseStats,
        strength: baseStats.strength + bonuses.strength!,
        agility: baseStats.agility + bonuses.agility!,
        intelligence: baseStats.intelligence + bonuses.intelligence!,
        hp: baseStats.hp + bonuses.hp!,
    };
}
