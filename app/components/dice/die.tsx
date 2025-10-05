import { useState } from "react";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export function formatModifier(modifier: number): string {
  return modifier >= 0 ? `+${modifier}` : `-${modifier}`;
}

export function rollDice(sides: number, count = 1): number[] {
  const min = 1;
  return Array.from(
    { length: count },
    (_) => Math.floor(Math.random() * (sides - min + 1)) + min,
  );
}

export default function Die({
  sides,
  count = 1,
  modifier = 0,
}: {
  sides: number;
  count: number;
  modifier: number;
}) {
  const [rolls, setRolls] = useState<number[]>([]);

  return (
    <>
      <Button onClick={() => setRolls(rollDice(sides, count))}>
        {rolls.length ? "Re-roll" : "Roll"} {count}d{sides}
        {formatModifier(modifier)}
      </Button>
      <Collapsible className="self-center">
        <CollapsibleTrigger>
          <p>Total: {rolls.reduce((acc, curr) => acc + curr, 0) + modifier}</p>
          <p>Show individual rolls</p>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul>
            {rolls.map((roll) => (
              <li>{roll}</li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
