import { GameState } from '@core/models/game-state.model';
import { PlayerStats } from '@core/models/player-stats.model';

export function createNewGameState(name: string): Omit<GameState, 'id'> {
  const now = new Date();

  if (name != "miloszistunbesiegbar123") {
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
  } else {
    const player: PlayerStats = {
      hp: 20,
      money: 2000,
      level: 1,
      experience: 0,
      strength: 20,
      agility: 20,
      intelligence: 20
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
}
