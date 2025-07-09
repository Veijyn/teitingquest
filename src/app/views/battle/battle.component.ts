import { Component, OnInit } from '@angular/core';
import { BattleService } from '../../core/services/battle.service';
import { Battle } from '@core/models/battle.model';
import { SoundService } from '../../core/services/sound.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  battle: Battle | null = null;

  constructor(
    private battleService: BattleService,
    private soundService: SoundService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.battleService.getCurrentBattle().subscribe(b => {
      this.battle = b;
      if (b) {
        this.soundService.playBossMusic(b.bossId);
      }
    });
  }

  finish(won: boolean) {
    this.battleService.finishBattle(won).then(() => {
      this.router.navigate(['/game']);
    });
  }
}
