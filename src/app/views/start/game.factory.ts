import { GameState } from '@core/models/game-state.model';
import { PlayerStats } from '@core/models/player-stats.model';

export function createNewGameState(name: string): Omit<GameState, 'id'> {
  const now = new Date();

  const player: PlayerStats = {
    hp: 20,
    money: 0,
    level: 1,
    experience: 0,
    strength: 1,
    agility: 1,
    intelligence: 1
  };

  return {
    name,
    createdAt: now,
    updatedAt: now,
    player,
    inventory: [],
    quests: [],
    bosses: [],
    battles: [],
    shopItems: []
  };
}
