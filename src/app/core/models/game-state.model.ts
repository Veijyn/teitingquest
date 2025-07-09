import { PlayerStats } from './player-stats.model';
import { Item } from './item.model';
import { ShopItem } from './item.model';
import { Quest } from './quest.model';
import { Boss } from './boss.model';
import { Battle } from './battle.model';

export interface GameState {
  id: number;
  name: string;
  adminPassword?: string;
  createdAt: Date;
  updatedAt: Date;

  player: PlayerStats;
  inventory: Item[];
  quests: Quest[];
  bosses: Boss[];
  battles: Battle[];
  shopItems: ShopItem[];
}