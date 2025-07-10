import { Item } from "./item.model";

export interface Quest {
  id: string;
  title: string;
  description: string;
  type: 'main' | 'side';
  status: 'open' | 'doing' | 'completed' | 'failed';
  rewardItems?: Item[];
  rewardXp?: number;
  rewardMoney?: number;
  repeatable?: boolean;
  followUpQuestIds?: string[];
  createdAt: Date;
  completedAt?: Date;
  acquired: boolean;

  failedAttempts?: number;
}


