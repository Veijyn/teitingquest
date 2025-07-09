import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quest } from '../models/quest.model';

@Injectable({ providedIn: 'root' })
export class QuestService {
  private quests$ = new BehaviorSubject<Quest[]>([]);

  setQuests(quests: Quest[]) {
    this.quests$.next([...quests]);
  }

  getQuests() {
    return this.quests$.asObservable();
  }

  addQuest(quest: Quest) {
    const current = this.quests$.value;
    this.quests$.next([...current, quest]);
  }

  getSnapshot(): Quest[] {
    return this.quests$.value;
  }
}
