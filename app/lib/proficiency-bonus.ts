/**
 * Returns the character's proficiency bonus given their total level
 * @param {number} level character level (add all multiclass levels together)
 * @returns {number} the proficiency bonus
 */
export default function proficiencyBonus(level: number): number {
  if (level < 1 || level > 20) throw new Error(`Invalid level: ${level}`);
  if (level <= 4) return 2;
  if (level <= 8) return 3;
  if (level <= 12) return 4;
  if (level <= 16) return 5;
  return 6;
}
