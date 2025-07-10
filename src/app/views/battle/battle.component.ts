import { Component, OnInit } from '@angular/core';
import { BattleService } from '../../core/services/battle.service';
import { Battle } from '@core/models/battle.model';
import { SoundService } from '../../core/services/sound.service';
import { PlayerService } from '@core/services/player.service';
import { PlayerStats } from '@core/models/player-stats.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  battle: Battle | null = null;
  playerHp: number | null = null;
  hpInput: number = 0;

  constructor(
    private battleService: BattleService,
    private soundService: SoundService,
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.battleService.getCurrentBattle().subscribe(b => {
      this.battle = b;
      if (b) {
        this.soundService.playBossMusic(b.bossId);
        this.loadPlayerHp();
      }
    });
  }

  loadPlayerHp() {
    this.playerService.getPlayer().subscribe(player => {
      if (!player) return;
      this.playerHp = player.hp;
    });
  }


  adjustHp(isPercent: boolean) {
    if (!this.playerHp || this.hpInput <= 0) return;

    let amount = isPercent
      ? Math.floor((this.hpInput / 100) * this.playerHp)
      : this.hpInput;

    //const confirmed = window.confirm(`Wirklich ${amount} HP abziehen?`);
    //if (!confirmed) return;

    this.playerService.getPlayer().subscribe(player => {
      if (!player) return; // Absicherung

      const newHp = player.hp - amount;
      player.hp = newHp;
      this.playerService.updatePlayer(player);
      this.playerHp = player.hp;
    });
  }

  finish(won: boolean) {
    this.battleService.finishBattle(won).then(() => {
      this.router.navigate(['/game']);
    });
  }
}
