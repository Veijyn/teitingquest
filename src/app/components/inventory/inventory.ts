import { Component, OnInit } from '@angular/core';
import { InventoryService } from '@core/services/inventory.service';
import { Item } from '@core/models/item.model';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss']
})
export class InventoryComponent implements OnInit {
  items: Item[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(items => this.items = items);
  }

  useItem(item: Item) {
    // Hier kommt gleich deine Logik rein
    console.log('Benutzt:', item.name);
  }
}

