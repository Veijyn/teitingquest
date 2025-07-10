import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Boss } from '../models/boss.model';
import { GameState } from '../models/game-state.model';
import { Battle } from '../models/battle.model';
import { evaluateCondition } from '../utils/evaluate-condition';
import { Router } from '@angular/router';
import { PlayerService } from './player.service';
import { GameSaveService } from './game-save.service';
import { SoundService } from './sound.service';

@Injectable({ providedIn: 'root' })
export class BattleService {
  private currentBattle$ = new BehaviorSubject<Battle | null>(null);
  private gameState!: GameState;

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private gameSave: GameSaveService,
    private soundService: SoundService
  ) { }

  setGameState(state: GameState) {
    this.gameState = state;
  }

 startBattle(bossId: string): void {
  const boss = this.gameState.bosses.find(b => b.id === bossId);
  if (!boss) return;

  const effectivePlayerStats = this.playerService.getEffectiveStats();
  if (!effectivePlayerStats) return;

  const unlockedAdvantages = boss.advantages.filter(adv =>
    evaluateCondition(adv.condition, effectivePlayerStats)
  );

  const battle: Battle = {
    id: `${bossId}-${Date.now()}`,
    bossId: boss.id,
    advantagesUnlocked: unlockedAdvantages,
    startedAt: new Date()
  };

  this.currentBattle$.next(battle);
}


  getCurrentBattle() {
    return this.currentBattle$.asObservable();
  }

  async finishBattle(won: boolean): Promise<void> {
    const battle = this.currentBattle$.value;
    if (!battle) return;

    battle.outcome = won ? 'win' : 'loss';
    battle.finishedAt = new Date();

    const boss = this.gameState.bosses.find(b => b.id === battle.bossId);
    if (boss) {
      if (won) {
        boss.defeated = true;
        this.soundService.playEffect("boss-besiegt-quest-erfuellt");
      } else {                
        boss.attempts = (boss.attempts || 0) + 1;
        this.soundService.playEffect("hp-null");
      }
    }

    this.gameState.battles.push(battle);
    this.currentBattle$.next(null);

    await this.gameSave.updateCurrentGame();

    this.router.navigate(['/game']);
  }

  getSnapshot(): Battle[] {
    return this.gameState.battles;
  }

}
