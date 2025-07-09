import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Boss } from '../models/boss.model';

@Injectable({ providedIn: 'root' })
export class BossService {
  private bosses$ = new BehaviorSubject<Boss[]>([]);  
  setBosses(bosses: Boss[]) {
    this.bosses$.next([...bosses]);
  }

  getBosses() {
    return this.bosses$.asObservable();
  }

  getSnapshot(): Boss[] {
    return this.bosses$.value;
  }
}
