import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SoundService {
  play(src: string): void {
  const audio = new Audio();
  audio.src = `${src}.mp3`;
  audio.onerror = () => {
    console.warn('MP3 fehlgeschlagen, versuche OGG');
    audio.src = `${src}.ogg`;
    audio.play().catch(err => console.error('Soundfehler (Fallback):', err));  };

  audio.volume = 0.8;
  audio.play().catch(err => console.error('Soundfehler:', err));
}

  playEffect(name: string): void {
    this.play(`assets/sounds/${name}.mp3`);
  }

  playBossMusic(bossId: string): void {
    this.play(`assets/sounds/boss-${bossId}.mp3`);
  }

}
