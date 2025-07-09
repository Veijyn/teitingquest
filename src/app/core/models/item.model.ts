import { PlayerStats } from "./player-stats.model";

export interface Item {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'consumable' | 'equipment' | 'buff' | 'quest';
  bonusStats?: Partial<PlayerStats>;
  price?: number;
  acquiredAt: Date;
}

export interface ShopItem extends Item {
  stock: number;
}
