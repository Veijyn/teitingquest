import { Component, OnInit } from '@angular/core';
import { QuestService } from '@core/services/quest.service';
import { Quest } from '@core/models/quest.model';
import { InventoryService } from '@core/services/inventory.service';
import { PlayerService } from '@core/services/player.service';

@Component({
  selector: 'app-questlog',
  standalone: false,
  templateUrl: './questlog.html',
  styleUrls: ['./questlog.scss']
})
export class QuestlogComponent implements OnInit {
  quests: Quest[] = [];
  filter: 'main' | 'side' = 'main';

  constructor(private questService: QuestService, private inventoryService: InventoryService,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.questService.getQuests().subscribe(qs => this.quests = qs);
  }

  toggleFilter(type: 'main' | 'side') {
    this.filter = type;
  }

  get filteredQuests() {
    return this.quests.filter(q => q.type === this.filter && q.acquired);
  }

  startQuest(id: string) {
    this.questService.startQuest(id);
  }

  failQuest(id: string) {
    this.questService.failQuest(id);
  }

  completeQuest(id: string) {
    this.questService.markCompleted(id, this.inventoryService, this.playerService);
  }

  // confirmingAction: { type: 'complete' | 'fail'; questId: string } | null = null;

  // openConfirm(type: 'complete' | 'fail', questId: string) {
  //   this.confirmingAction = { type, questId };
  // }

  // cancelConfirm() {
  //   this.confirmingAction = null;
  // }

  // confirmAction() {
  //   if (!this.confirmingAction) return;
  //   const { type, questId } = this.confirmingAction;
  //   if (type === 'complete') this.questService.markCompleted(questId, this.inventoryService, this.playerService);
  //   else this.questService.failQuest(questId);
  //   this.confirmingAction = null;
  // }

  get completedQuestsCount() {
    return this.quests.filter(q => q.status === 'completed').length;
  }

  isInteractiveQuest(quest: Quest): boolean {
    const isSide = quest.type === 'side';
    const isTutorial = quest.id === 'tutorial';
    const isFinale = quest.id === 'finale-tracking';

    if (isSide || isTutorial) return true;

    if (isFinale) {
      const otherMainQuests = this.quests.filter(q =>
        q.type === 'main' &&
        q.id !== 'finale-tracking' &&
        q.acquired &&
        q.status !== 'completed' &&
        q.status !== 'failed'
      );
      // Nur interaktiv, wenn KEINE andere Hauptquest mehr aktiv ist
      return otherMainQuests.length === 0;
    }

    return false;
  }

  cancelQuest(id: string) {
    this.questService.cancelQuest(id);
  }

}
