import { Component, OnInit } from '@angular/core';
import { BattleService } from '../../core/services/battle.service';
import { Battle } from '@core/models/battle.model';
import { SoundService } from '../../core/services/sound.service';
import { PlayerService } from '@core/services/player.service';
import { QuestService } from '@core/services/quest.service';
import { InventoryService } from '@core/services/inventory.service';
import { PlayerStats } from '@core/models/player-stats.model';
import { Router } from '@angular/router';
import { Boss } from '@core/models/boss.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  battle: Battle | null = null;
  boss: Boss | null = null;
  playerHp: number | null = null;
  playerStats: PlayerStats | null = null;
  hpInput: number = 0;
  confirmWinVisible: boolean = false;

  constructor(
    private battleService: BattleService,
    private soundService: SoundService,
    private playerService: PlayerService,
    private questService: QuestService,
    private inventoryService: InventoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.battleService.getCurrentBattle().subscribe(b => {
      this.battle = b;
      if (b) {
        this.soundService.playBossMusic(b.bossId);
        this.loadBoss(b.bossId);
        this.loadPlayerStats();
      }
    });
  }

  loadBoss(bossId: string) {
    const bosses = this.battleService.getGameState().bosses;
    this.boss = bosses.find(b => b.id === bossId) || null;
  }

  loadPlayerStats() {
    this.playerService.getPlayer().subscribe(player => {
      if (!player) return;
      this.playerHp = player.hp;

      // Effektive Werte berechnen
      const effectiveStats = this.playerService.getEffectiveStats();
      this.playerStats = effectiveStats;
    });
  }

  formatCondition(stat: string, operator: string, value: number): string {
    const statMap: { [key: string]: string } = {
      strength: 'Stärke',
      agility: 'Geschicklichkeit',
      intelligence: 'Intelligenz',
      hp: 'HP',
      money: 'Geld',
      level: 'Level',
      experience: 'EP',
      questsCompleted: 'Quests'
    };
    return `${statMap[stat] || stat} ${operator} ${value}`;
  }

  toggleConfirmWin() {
    this.confirmWinVisible = !this.confirmWinVisible;
  }

  adjustHp(isPercent: boolean) {
    const inputValue = parseInt(String(this.hpInput), 10);
    if (isNaN(inputValue) || inputValue <= 0) return;

    const player = this.playerService.getSnapshot();
    if (!player) return;

    const currentHp = player.hp;
    const amount = isPercent
      ? Math.floor((inputValue / 100) * currentHp)
      : inputValue;

    const newHp = Math.max(0, currentHp - amount);
    if (newHp === currentHp) return;

    const updated = { ...player, hp: newHp };
    this.playerService.updatePlayer(updated);
    this.playerHp = newHp;
  }

  finish(won: boolean) {
    const player = this.playerService.getSnapshot();
    if (!player) return;

    if (won && this.boss?.questId) {
      this.questService.markCompleted(this.boss.questId, this.inventoryService, this.playerService);
    }

    if (!won) {
      // Spieler wurde „besiegt“ – auf 0 HP setzen und dann sofort wiederbeleben
      const level = player.level ?? 1;
      const restoredHp = 20 + Math.max(0, level - 1) * 3;

      const updatedPlayer = { ...player, hp: restoredHp };
      this.playerService.updatePlayer(updatedPlayer);
    }

    this.battleService.finishBattle(won).then(() => {
      this.router.navigate(['/game']);
    });
  }

  goBack() {
    this.router.navigate(['/game']);
  }
}
