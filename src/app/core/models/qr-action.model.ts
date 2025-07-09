export type QrAction =
  | { type: 'heal'; amount: number; description?: string }
  | { type: 'item'; itemId: string }
  | { type: 'startBattle'; bossId: string }
  | { type: 'quest'; questId: string };