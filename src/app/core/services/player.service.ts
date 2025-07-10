import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlayerStats } from '../models/player-stats.model';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private player$ = new BehaviorSubject<PlayerStats | null>(null);

  setPlayer(stats: PlayerStats) {
    this.player$.next({ ...stats });
  }

  getPlayer() {
    return this.player$.asObservable();
  }

  updatePlayer(stats: PlayerStats) {
    this.player$.next({ ...stats });
  }

  heal(amount: number) {
    const stats = this.player$.value;
    if (!stats) return;
    stats.hp += amount;
    this.player$.next({ ...stats });
  }

  pay(amount: number): boolean {
    const stats = this.player$.value;
    if (!stats || stats.money < amount) return false;
    stats.money -= amount;
    this.player$.next({ ...stats });
    return true;
  }

  addMoney(amount: number) {
    const stats = this.player$.value;
    if (!stats) return;
    stats.money += amount;
    this.player$.next({ ...stats });
  }

  addXp(amount: number) {
    const stats = this.player$.value;
    if (!stats) return;
    stats.experience += amount;
    this.player$.next({ ...stats });
  }

  updateStats(partial: Partial<PlayerStats>) {
    const current = this.player$.value!;
    this.player$.next({ ...current, ...partial });
  }


  getSnapshot(): PlayerStats | null {
    return this.player$.value;
  }
}
