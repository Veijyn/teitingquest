import { Component, OnInit } from '@angular/core';
import { BossService } from '@core/services/boss.service';
import { Boss } from '@core/models/boss.model';
import { BattleService } from '@core/services/battle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boss-list',
  standalone: false,
  templateUrl: './boss-list.html',
  styleUrls: ['./boss-list.scss']
})
export class BossListComponent implements OnInit {
  bosses: Boss[] = [];

  constructor(
    private bossService: BossService,
    private battleService: BattleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bossService.getBosses().subscribe(b => this.bosses = b);
  }

  startBattle(bossId: string) {
    this.battleService.startBattle(bossId);
    this.router.navigate(['/battle']);
  }
}
