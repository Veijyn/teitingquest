import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  currentIndex = 0;
  readonly maxIndex = 4;
  navIcons = ['skills.svg', 'backpack.svg', 'scroll-quill.svg', 'brute.svg', 'swap-bag.svg'];
  navLabels = ['Charakter', 'Inventar', 'Quests', 'Bosse', 'Shop'];

  constructor(private router: Router) { }

  // Optional: mit Touch-Events
  startX = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    const diff = endX - this.startX;

    if (diff > 50 && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (diff < -50 && this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    }
  }

  openScanner() {
    this.router.navigate(['/scanner']);
  }

}
