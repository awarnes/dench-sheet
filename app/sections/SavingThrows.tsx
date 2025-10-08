import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import DiceRoller from "../components/dice/dice-roller";
import scoreModifier from "../lib/score-modifier";
import formatModifier from "~/lib/format-modifier";

export default function SavingThrows() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saving Throws</CardTitle>
      </CardHeader>
      <CardContent>
        {Object.entries({
          Strength: 12,
          Dexterity: 12,
          Constitution: 12,
          Intelligence: 12,
          Wisdom: 12,
          Charisma: 12,
        }).map(([ability, score]) => {
          const modifier = scoreModifier(score);
          return (
            <Card key={`st-${ability}`}>
              <CardContent>
                {ability} {formatModifier(modifier)}{" "}
                <DiceRoller sides={20} count={1} modifier={modifier} />
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
}
