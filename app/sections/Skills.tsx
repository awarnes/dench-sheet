import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Circle, CircleCheck } from "lucide-react";
import scoreModifier from "../lib/score-modifier";
import formatModifier from "../lib/format-modifier";
import proficiencyBonus from "~/lib/proficiency-bonus";
import { ABILITY_SCORES, SKILLS, LEVEL, ABILITIES } from "~/character-data";

function Skill({
  name,
  ability,
  proficient,
}: {
  name: string;
  ability: string;
  proficient: boolean;
}) {
  return (
    <p>
      {proficient ? <CircleCheck /> : <Circle />}{" "}
      {formatModifier(
        scoreModifier(
          ABILITY_SCORES[ability as keyof typeof ABILITY_SCORES] +
            (proficient ? proficiencyBonus(LEVEL) : 0),
        ),
      )}{" "}
      {name}
    </p>
  );
}

export default function Skills() {
  return (
    <p></p>
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Skills</CardTitle>
    //   </CardHeader>
    //   {/*<CardContent>
    //     {Object.entries(SKILLS).map(([name, { ability, proficient }]) => (
    //       <Skill
    //         key={name}
    //         name={name}
    //         ability={ability}
    //         proficient={proficient}
    //       />
    //     ))}
    //   </CardContent>*/}
    // </Card>
  );
}
