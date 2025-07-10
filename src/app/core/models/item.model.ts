import { PlayerStats } from "./player-stats.model";

export type EquipmentSlot =
  | 'head'        // Helm
  | 'chest'       // Brust
  | 'hands'       // Handschuhe
  | 'legs'        // Hose
  | 'feet'        // Stiefel
  | 'weapon'      // Waffe
  | 'back'        // Rücken
  | 'shoulders'   // Schulter
  | 'belt'        // Gürtel
  | 'wrist';      // Handgelenke

export interface Item {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'consumable' | 'equipment' | 'buff' | 'quest';
  bonusStats?: Partial<PlayerStats>;
  price?: number;
  acquiredAt: Date;
  available?: boolean;
  questsRequired?: number;
  slot?: EquipmentSlot; // ⬅️ NEU
  equipped?: boolean;   // ⬅️ NEU
}

export interface ShopItem extends Item {
  stock: number;
}
