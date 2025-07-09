import { Component, OnInit } from '@angular/core';
import { QuestService } from '@core/services/quest.service';
import { Quest } from '@core/models/quest.model';

@Component({
  selector: 'app-questlog',
  standalone: false,
  templateUrl: './questlog.html',
  styleUrls: ['./questlog.scss']
})
export class QuestlogComponent implements OnInit {
  quests: Quest[] = [];

  constructor(private questService: QuestService) {}

  ngOnInit(): void {
    this.questService.getQuests().subscribe(qs => this.quests = qs);
  }
}
