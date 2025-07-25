import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlayerStats } from '../models/player-stats.model';
import { Item } from '@core/models/item.model';
import { calculateEffectiveStats } from '@core/utils/calculate-effective-stats';
import { GameSaveService } from './game-save.service';
import { getLevelForXp } from '../utils/xp-curve';
import { ToastService } from '@views/toasts/toast.service';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private player$ = new BehaviorSubject<PlayerStats | null>(null);

  constructor(private gameSave: GameSaveService, private toast: ToastService) { }

  setPlayer(stats: PlayerStats) {
    this.player$.next({ ...stats });
  }

  getPlayer() {
    return this.player$.asObservable();
  }

  getSnapshot(): PlayerStats | null {
    return this.player$.value;
  }

  updatePlayer(stats: PlayerStats) {
    this.player$.next({ ...stats });
    this.gameSave.updateCurrentGame();
  }

  pay(amount: number): boolean {
    const stats = this.player$.value;
    if (!stats || stats.money < amount) return false;

    stats.money -= amount;
    this.commit(stats); // nutzt jetzt zentrale commit-Methode
    return true;
  }

  addXp(amount: number) {
    const stats = this.player$.value;
    if (!stats) return;

    const oldLevel = stats.level;
    const newXp = stats.experience + amount;
    const newLevel = getLevelForXp(newXp);

    const levelDiff = newLevel - oldLevel;

    if (levelDiff > 0) {
      this.toast.show(`Du bist jetzt Level ${newLevel}!`);

      // Dauerhafte Stat-Increases (Basiswerte!)
      stats.hp += 3 * levelDiff;
      stats.strength += 1 * levelDiff;
      stats.agility += 1 * levelDiff;
      stats.intelligence += 1 * levelDiff;
    }

    this.commit({
      ...stats,
      experience: newXp,
      level: newLevel
    });
  }

  addMoney(amount: number) {
    const stats = this.player$.value;
    if (!stats) return;
    stats.money += amount;
    this.commit(stats);
  }

  heal(amount: number) {
    const stats = this.player$.value;
    if (!stats) return;
    stats.hp += amount;
    this.commit(stats);
  }

  updateStats(partial: Partial<PlayerStats>) {
    const stats = this.player$.value;
    if (!stats) return;
    this.commit({ ...stats, ...partial });
  }

  getEffectiveStats(): PlayerStats | null {
    const player = this.player$.value;
    return player ? calculateEffectiveStats(player) : null;
  }

  updateQuizResult(quizKey: string, percent: number): void {
  const stats = this.player$.value;
  if (!stats) return;

  const updatedResults = { ...(stats.quizResults || {}), [quizKey]: percent };
  this.commit({ ...stats, quizResults: updatedResults });
}


  removeExpiredBuffs() {
    const stats = this.player$.value;
    if (!stats || !stats.activeBuffs) return;    

    const now = new Date();
    const stillValid = stats.activeBuffs.filter(buff => {
      const validUntil = (buff as any).validUntil;
      return !validUntil || new Date(validUntil) > now;
    });

    if (stillValid.length !== stats.activeBuffs.length) {
      this.commit({ ...stats, activeBuffs: stillValid });
    }
  }


  equipItem(item: Item): void {
    const stats = this.player$.value;
    if (!stats || !item.slot) return;
    const filtered = (stats.equippedItems ?? []).filter(i => i.slot !== item.slot);
    const updatedItem = { ...item, equipped: true };
    stats.equippedItems = [...filtered, updatedItem];
    this.commit(stats);
  }

  unequipItem(slot: string): void {
    const stats = this.player$.value;
    if (!stats) return;
    stats.equippedItems = (stats.equippedItems ?? []).filter(i => i.slot !== slot);
    this.commit(stats);
  }

  addBuff(item: Item, durationMs: number) {
    const stats = this.player$.value;
    if (!stats) return;
    const buffItem = {
      ...item,
      validUntil: new Date(Date.now() + durationMs)
    };
    stats.activeBuffs = [...(stats.activeBuffs ?? []), buffItem];
    this.commit(stats);
  }

  private commit(updated: PlayerStats) {
    this.player$.next({ ...updated });
    this.gameSave.updateCurrentGame();
  }
}

