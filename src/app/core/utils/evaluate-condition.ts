import { AdvantageCondition } from '../models/boss.model';
import { PlayerStats } from '../models/player-stats.model';

export function evaluateCondition(conditions: AdvantageCondition[], stats: PlayerStats): boolean {
  return conditions.every(cond => {
    const statVal = stats[cond.stat] ?? 0;
    switch (cond.operator) {
      case '>=': return statVal >= cond.value;
      case '<=': return statVal <= cond.value;
      case '>': return statVal > cond.value;
      case '<': return statVal < cond.value;
      case '==': return statVal === cond.value;
      case '!=': return statVal !== cond.value;
      default: return false;
    }
  });
}

