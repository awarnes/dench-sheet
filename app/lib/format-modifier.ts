/**
 * Returns a properly formatted modifier for display with either a + or -
 * @param {number} modifier Modifier number to display
 * @returns {string}
 */
export default function formatModifier(modifier: number): string {
  return modifier >= 0 ? `+${modifier}` : `-${modifier}`;
}
