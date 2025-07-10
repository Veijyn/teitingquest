import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { GameState } from '../models/game-state.model';
import { firstValueFrom } from 'rxjs';
import { PlayerService } from './player.service';
import { InventoryService } from './inventory.service';
import { ShopService } from './shop.service';
import { BattleService } from './battle.service';
import { BossService } from './boss.service';

@Injectable({ providedIn: 'root' })
export class GameSaveService {
  private lastGameStateId!: number;
  private currentSnapshotBuilder!: () => GameState;

  constructor(private db: NgxIndexedDBService) {}

  registerSnapshotBuilder(builder: () => GameState) {
    this.currentSnapshotBuilder = builder;
  }

  async saveNewGame(state: Omit<GameState, 'id'>): Promise<GameState> {
    state.updatedAt = new Date();
    const result = await firstValueFrom(this.db.add('gameStates', state));
    const id = typeof result === 'number' ? result : (result as any).id;
    this.lastGameStateId = id;
    return { ...state, id };
  }

  async updateCurrentGame(): Promise<GameState> {
    if (!this.currentSnapshotBuilder) throw new Error('No snapshot builder registered.');
    const snapshot = this.currentSnapshotBuilder();
    snapshot.updatedAt = new Date();
    return this.updateGame(snapshot);
  }

  async updateGame(state: GameState): Promise<GameState> {
    await firstValueFrom(this.db.update('gameStates', state));
    return state;
  }

  async loadGame(id: number): Promise<GameState> {
    this.lastGameStateId = id;
    return firstValueFrom(this.db.getByKey('gameStates', id));
  }

  async listGames(): Promise<GameState[]> {
    return firstValueFrom(this.db.getAll('gameStates'));
  }
}

  /* deleteGame(id: number): Promise<void> {
   return firstValueFrom(this.db.delete('gameStates', id));
   }*/

