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
  advantageVisibility: Record<string, boolean> = {}; 

  constructor(
    private bossService: BossService,
    private battleService: BattleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bossService.getBosses().subscribe(b => {
      this.bosses = b;
      this.bosses.forEach(boss => this.advantageVisibility[boss.id] = false); 
    });
  }

  toggleAdvantages(bossId: string) {
    this.advantageVisibility[bossId] = !this.advantageVisibility[bossId];
  }

  showAdvantages(bossId: string): boolean {
    return this.advantageVisibility[bossId];
  }

  startBattle(bossId: string) {
    this.battleService.startBattle(bossId);
    this.router.navigate(['/battle']);
  }

  statIcon(stat: string): string {
  switch (stat) {
    case 'strength': return '🗡️';
    case 'agility': return '🎯';
    case 'intelligence': return '🧠';
    case 'hp': return '❤️';
    case 'level': return '⭐';
    case 'money': return '💰';
    case 'experience': return '📘';
    default: return '❔';
  }
}

}
