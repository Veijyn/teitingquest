import { GameState } from '@core/models/game-state.model';
import { PlayerStats } from '@core/models/player-stats.model';
import { exampleBosses } from '@components/boss-list/boss.factory';
import { createShopItems } from '@components/shop/shop.factory';

export function createNewGameState(name: string): Omit<GameState, 'id'> {
  const now = new Date();

  const player: PlayerStats = {
    hp: 100,
    money: 200,
    level: 1,
    experience: 0,
    strength: 22,
    agility: 22,
    intelligence: 22
  };

  return {
    name,
    createdAt: now,
    updatedAt: now,
    player,
    inventory: [],
    quests: [],
    bosses: JSON.parse(JSON.stringify(exampleBosses)),
    battles: [],
    shopItems: JSON.parse(JSON.stringify(createShopItems())) // ✅
  };
}
