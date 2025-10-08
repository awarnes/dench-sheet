import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../components/ui/card";
import scoreModifier from "../lib/score-modifier";
import formatModifier from "../lib/format-modifier";

function AbilityScore({ ability, score }: { ability: string; score: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ability}</CardTitle>
      </CardHeader>
      <CardContent>{score}</CardContent>
      <CardFooter>{formatModifier(scoreModifier(score))}</CardFooter>
    </Card>
  );
}

export default function AbilityScores() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ability Scores</CardTitle>
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
          return (
            <AbilityScore
              key={`as-${ability}`}
              ability={ability}
              score={score}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
