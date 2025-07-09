import { Boss } from './boss.model';
import { PlayerStats } from './player-stats.model';
import { BossAdvantage } from './boss.model';

export interface Battle {
  id: string;
  bossId: string;
  advantagesUnlocked: BossAdvantage[];
  outcome?: 'win' | 'loss';
  startedAt: Date;
  finishedAt?: Date;
}