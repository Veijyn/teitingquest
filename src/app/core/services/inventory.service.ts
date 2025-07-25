import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';
import { ToastService } from '@views/toasts/toast.service';
import { GameSaveService } from './game-save.service';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private items$ = new BehaviorSubject<Item[]>([]);

  constructor(private toast: ToastService, private gameSave: GameSaveService) { }

  setInventory(items: Item[]) {
    this.commit(items);
  }

  getInventory() {
    return this.items$.asObservable();
  }

  addItem(item: Item) {
    const current = this.items$.value;
    const updated = [...current, item];
    this.commit(updated);
  }

  addItems(items: Item[]) {
    const current = this.items$.value;
    const updated = [...current, ...items];
    this.commit(updated);
  }

  unlockItemById(id: string): boolean {
    const current = this.getSnapshot();
    let updated = false;

    const newInventory = current.map(item => {
      if (item.id === id && item.available !== true) {
        updated = true;
        return { ...item, available: true };
      }
      return item;
    });

    if (updated) {
      this.setInventory(newInventory);
    }

    return updated;
  }

  removeItem(id: string) {
    const current = this.items$.value;
    const updated = current.filter(item => item.id !== id);
    this.commit(updated);
  }

  updateEquippedStatus(id: string, equipped: boolean) {
    const current = this.items$.value;
    const updated = current.map(item =>
      item.id === id ? { ...item, equipped } : item
    );
    this.commit(updated);
  }

  removeSingleItem(itemToRemove: Item) {
    const current = this.items$.value;
    const index = current.findIndex(i => i.id === itemToRemove.id && i.acquiredAt === itemToRemove.acquiredAt);
    if (index !== -1) {
      current.splice(index, 1);
      this.commit([...current]);
    }
  }


  getSnapshot(): Item[] {
    return this.items$.value;
  }

  private commit(updated: Item[]) {
    this.items$.next(updated);
    this.gameSave.updateCurrentGame();
  }
}

