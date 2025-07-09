import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@core/services/player.service';
import { PlayerStats } from '@core/models/player-stats.model';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.html',
  styleUrls: ['./stats.scss']
})
export class StatsComponent implements OnInit {
  stats: PlayerStats | null = null;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getPlayer().subscribe(p => this.stats = p);
  }
}
