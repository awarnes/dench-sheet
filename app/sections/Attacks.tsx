import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ATTACKS, ABILITY_SCORES, LEVEL } from "../character-data";
import proficiencyBonus from "~/lib/proficiency-bonus";
import scoreModifier from "~/lib/score-modifier";
import formatModifier from "~/lib/format-modifier";
import DiceDisplay from "~/components/dice/dice-display";
import DiceRoller from "~/components/dice/dice-roller";

export default function Attacks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attacks</CardTitle>
      </CardHeader>
      <CardContent>
        {ATTACKS.map((attack) => {
          const { damage } = attack;

          const attackBonus =
            (attack.proficient ? proficiencyBonus(LEVEL) : 0) +
            scoreModifier(ABILITY_SCORES[attack.ability]);

          return (
            <Card key={`atk-${attack.name}`}>
              <CardHeader>
                <CardTitle>{attack.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div>Attack Bonus: {formatModifier(attackBonus)}</div>
                {damage.map((dmg, ind) => {
                  const { dice } = dmg;
                  return (
                    <div key={`dmg-${dmg.name}-${ind}`}>
                      {dmg.name}{" "}
                      <DiceDisplay
                        count={dice.count}
                        sides={dice.sides}
                        modifier={dice.modifier}
                      />{" "}
                      {dmg.type}
                      <DiceRoller
                        sides={dice.sides}
                        count={dice.count}
                        modifier={dice.modifier}
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
}
