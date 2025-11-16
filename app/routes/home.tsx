import type { Route } from "./+types/home";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import AbilityScores from "../sections/AbilityScores";
import SavingThrows from "../sections/SavingThrows";
import Attacks from "~/sections/Attacks";
import {
  ABILITIES,
  ABILITY_SCORES,
  INSPIRATION_POINTS,
  LEVEL,
} from "~/character-data";
import proficiencyBonus from "~/lib/proficiency-bonus";
import scoreModifier from "~/lib/score-modifier";
import formatModifier from "~/lib/format-modifier";
import Health from "~/sections/Health";
import Background from "~/sections/Background";
import Features from "~/sections/Features";
import Skills from "~/sections/Skills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dench Splitsail" },
    { name: "description", content: "Character sheet for Dench the Bench" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div id="col-1" className="col-span-4">
          <div className="col-span-4 grid grid-cols-subgrid gap-2">
            <div className="col-start-1 col-span-2">
              <AbilityScores />
            </div>
            <div className="col-start-3 col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Inspiration: {INSPIRATION_POINTS}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Proficiency Bonus: {proficiencyBonus(LEVEL)}
                  </CardTitle>
                </CardHeader>
              </Card>
              <SavingThrows />
              <Skills />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>
                Passive Wisdom:{" "}
                {formatModifier(scoreModifier(ABILITY_SCORES[ABILITIES.WIS]))}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Other Proficiencies & Languages</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div id="col-2" className="col-span-4">
          <Card>
            <CardContent>
              <Health />
              <Attacks />
            </CardContent>
          </Card>
        </div>
        <div id="col-3" className="col-span-4">
          <Card>
            <CardContent>
              <Background />
              <Features />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
