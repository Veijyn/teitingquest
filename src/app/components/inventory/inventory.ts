import { Component, OnInit } from '@angular/core';
import { InventoryService } from '@core/services/inventory.service';
import { PlayerService } from '@core/services/player.service';
import { Item } from '@core/models/item.model';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss']
})
export class InventoryComponent implements OnInit {
  items: Item[] = [];

  constructor(private inventoryService: InventoryService, private playerService: PlayerService) {}

  ngOnInit(): void {
  this.inventoryService.getInventory().subscribe(items => {
    this.items = items.filter(item => item.available !== false);
  });
}

  useItem(item: Item) {
    // Hier kommt gleich deine Logik rein
    console.log('Benutzt:', item.name);
  }

  checkForUnlockedEquipment() {
  const player = this.playerService.getSnapshot() ?? { questsCompleted: 0 };
  const inventory = this.inventoryService.getSnapshot();

  const unlocked: Item[] = [];

  const updated = inventory.map(item => {
    if (
      item.type === 'equipment' &&
      item.questsRequired != null &&
      item.questsRequired <= (player.questsCompleted ?? 0) &&
      item.available !== true
    ) {
      unlocked.push({ ...item, available: true });
      return { ...item, available: true };
    }
    return item;
  });

  if (unlocked.length > 0) {
    this.inventoryService.setInventory(updated);
    // optional: notify the player
    //console.log('Neue Ausrüstung verfügbar:', unlocked.map(i => i.name).join(', '));
  }
}
}

