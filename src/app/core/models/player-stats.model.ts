// player-stats.model.ts
import { Item } from './item.model';

export interface PlayerStats {
  strength: number;
  agility: number;
  intelligence: number;
  hp: number;
  money: number;
  level: number;
  experience: number;
  questsCompleted?: number;

  equippedItems?: Item[];
  activeBuffs?: Item[];  
}
