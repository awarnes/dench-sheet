import type { DiceRoll } from "../../character-data";
import formatModifier from "../../lib/format-modifier";

export default function DiceDisplay(
  { sides, count = 1, modifier = 0 }: DiceRoll,
  style = "italic",
) {
  return (
    <span className={style}>
      {count}d{sides}
      {formatModifier(modifier)}
    </span>
  );
}
