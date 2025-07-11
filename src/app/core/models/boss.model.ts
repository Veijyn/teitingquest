import { PlayerStats } from './player-stats.model';

export interface AdvantageCondition {
  stat: keyof PlayerStats;
  operator: '>=' | '<=' | '>' | '<' | '==' | '!=';
  value: number;
}

export interface BossAdvantage {
  id: string;
  name: string;
  description: string;
  condition: AdvantageCondition[];
}

export interface Boss {
  id: string;
  name: string;
  title?: string;
  description: string;
  image?: string;
  stats: PlayerStats;
  advantages: BossAdvantage[];
  defeated?: boolean;
  attempts?: number;
  questId?: string;
}
