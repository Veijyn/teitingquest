import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quest } from '../models/quest.model';
import { createQuestPool } from '@components/questlog/quest-pool.factory';
import { InventoryService } from './inventory.service';
import { PlayerService } from './player.service';
import { GameSaveService } from './game-save.service';
import { ToastService } from '@views/toasts/toast.service';
import { SoundService } from './sound.service';

@Injectable({ providedIn: 'root' })
export class QuestService {
  private quests$ = new BehaviorSubject<Quest[]>([]);
  private questPool = createQuestPool();

  constructor(
    private inventoryService: InventoryService,
    private playerService: PlayerService,
    private gameSave: GameSaveService,
    private toastService: ToastService,
    private soundService: SoundService
  ) { }

  setQuests(quests: Quest[]) {
    this.quests$.next([...quests]);
  }

  getQuests() {
    return this.quests$.asObservable();
  }

  addQuest(quest: Quest) {
    const current = this.quests$.value;
    const exists = current.some(q => q.id === quest.id && !quest.repeatable);
    if (exists) return;

    const newQuest = { ...quest, createdAt: new Date() };
    const updated = [...current, newQuest];

    this.commit(updated); // ✅ persistente Speicherung
  }

  /** Aufrufbar per QR-Scan */
  addQuestById(id: string): boolean {
    const template = this.questPool.find(q => q.id === id);
    if (!template) return false;
    this.addQuest({ ...template });
    return true;
  }

  getSnapshot(): Quest[] {
    return this.quests$.value;
  }

  setFromSnapshot(snapshot: Quest[]) {
    this.quests$.next(snapshot);
  }

  markCompleted(id: string, inventoryService: InventoryService, playerService: PlayerService) {
    const updated = this.quests$.value.map(q => {
      if (q.id !== id) return q;

      // Rewards:
      if (q.rewardItems?.length) {
        const rewardItems = q.rewardItems.map(item => ({ ...item, acquiredAt: new Date() }));
        inventoryService.addItems(rewardItems);
      }

      if (q.rewardXp) {
        playerService.addXp(q.rewardXp);
      }

      if (q.rewardMoney) {
        playerService.addMoney(q.rewardMoney);
      }

      // Folgequests hinzufügen
      if (q.followUpQuestIds?.length) {
        for (const nextId of q.followUpQuestIds) {
          const template = this.questPool.find(q => q.id === nextId);
          if (template) {
            this.addQuest({ ...template, createdAt: new Date() });
          }
        }
      }

      return { ...q, status: 'completed', completedAt: new Date() } as Quest;
    });

    // Quests zählen
    const completedCount = updated.filter(q => q.status === 'completed').length;
    playerService.updateStats({ questsCompleted: completedCount });

    // Neue Equipment-Items freischalten
    const inventory = this.inventoryService.getSnapshot();
    const newUnlocks: string[] = [];

    const updatedInventory = inventory.map(item => {
      if (
        item.type === 'equipment' &&
        item.questsRequired != null &&
        item.questsRequired <= completedCount &&
        item.available !== true
      ) {
        newUnlocks.push(item.name);
        return { ...item, available: true };
      }
      return item;
    });

    if (newUnlocks.length > 0) {
      this.inventoryService.setInventory(updatedInventory);

      this.toastService.show(`Neue Ausrüstung freigeschaltet:\n- ${newUnlocks.join('\n- ')}`);
    }
    this.soundService.playEffect("boss-besiegt-quest-erfuellt");
    this.commit(updated as Quest[]);
  }

  startQuest(id: string) {
    const updated = this.quests$.value.map(q =>
      q.id === id && q.status === 'open' ? { ...q, status: 'doing' } : q
    );
    this.soundService.playEffect('quest-annahme');
    this.commit(updated as Quest[]);
  }

  failQuest(id: string) {
    const updated = this.quests$.value.map(q => {
      if (q.id !== id) return q;

      let failedAttempts = q.failedAttempts ?? 0;
      failedAttempts++;

      const canRetry = q.repeatable ?? false;

      return {
        ...q,
        status: canRetry ? 'open' : 'failed',
        failedAttempts
      };
    });
    this.soundService.playEffect('quest-fehlgeschlagen');
    this.commit(updated as Quest[]);
  }

  cancelQuest(id: string) {
    const updated = this.quests$.value.map(q =>
      q.id === id && q.status === 'doing' ? { ...q, status: 'open' } : q
    );
    this.commit(updated as Quest[]);
  }

  private commit(updated: Quest[]) {
    this.quests$.next(updated);
    this.gameSave.updateCurrentGame();
  }
}
