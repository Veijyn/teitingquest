import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SoundService {
  play(src: string): void {
    const audio = new Audio(src);
    audio.volume = 0.8; // anpassbar
    audio.play().catch(err => console.error('Soundfehler:', err));
  }

  playEffect(name: string): void {
    this.play(`/assets/sounds/${name}.mp3`);
  }

  playBossMusic(bossId: string): void {
    this.play(`/assets/sounds/boss-${bossId}.mp3`);
  }
}
