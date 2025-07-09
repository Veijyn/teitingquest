import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { GameState } from '../models/game-state.model';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameSaveService {
  constructor(private db: NgxIndexedDBService) {}

 async saveNewGame(state: Omit<GameState, 'id'>): Promise<GameState> {
  state.updatedAt = new Date();
  const result = await firstValueFrom(this.db.add('gameStates', state));
  const id = typeof result === 'number' ? result : (result as any).id;
  return { ...state, id };
}

  async updateGame(state: GameState): Promise<GameState> {
    state.updatedAt = new Date();
    await firstValueFrom(this.db.update('gameStates', state));
    return state;
  }


  loadGame(id: number): Promise<GameState> {
    return firstValueFrom(this.db.getByKey('gameStates', id));
  }

  listGames(): Promise<GameState[]> {
    return firstValueFrom(this.db.getAll('gameStates'));
  }

   /* deleteGame(id: number): Promise<void> {
    return firstValueFrom(this.db.delete('gameStates', id));
    }*/

}
