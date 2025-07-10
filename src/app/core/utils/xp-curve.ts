export const XP_TABLE = [
  0,     // Level 1
  100,   // Level 2
  350,   // Level 3
  700,   // Level 4
  1200,  // Level 5
  1900,  // Level 6
  2800,  // Level 7
  3900,  // Level 8
  5200,  // Level 9
  7400   // Level 10
];

export function getLevelForXp(xp: number): number {
  for (let i = XP_TABLE.length - 1; i >= 0; i--) {
    if (xp >= XP_TABLE[i]) return i + 1;
  }
  return 1;
}