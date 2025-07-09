import { Item } from "./item.model";

export interface Quest {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'completed' | 'failed';
  rewardItems?: Item[];
  rewardXp?: number;
  createdAt: Date;
  completedAt?: Date;
}