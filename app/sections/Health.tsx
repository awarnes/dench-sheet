import { useEffect, useState } from "react";
import { Plus, Minus, Heart, Skull, RotateCcw } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Ratings } from "~/components/ui/ratings";

import {
  ABILITY_SCORES,
  ABILITIES,
  HIT_DIE,
  LEVEL,
  MAX_HITPOINTS,
} from "~/character-data";
import DiceRoller from "~/components/dice/dice-roller";
import { Input } from "~/components/ui/input";
import formatModifier from "~/lib/format-modifier";
import scoreModifier from "~/lib/score-modifier";

export default function Health() {
  const [success, setSuccess] = useState(0);
  const [failure, setFailure] = useState(0);
  const [hitDiceCount, setHitDiceCount] = useState(LEVEL);
  const [hitPoints, setHitPoints] = useState(`${MAX_HITPOINTS}`);

  useEffect(() => {
    const hp = localStorage.getItem("hit_points") ?? `${MAX_HITPOINTS}`;
    if (hp) {
      setHitPoints(hp);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hit_points", hitPoints);
  }, [hitPoints]);

  const updateHitDice = (value: number) => {
    setHitDiceCount(Math.min(LEVEL, Math.max(0, hitDiceCount + value)));
  };

  const updateSuccess = (value: string[]) => {
    console.log("calling set success: ", value);
    setSuccess(parseInt(value[0]));
  };

  const updateFailure = (value: string[]) => {
    setFailure(parseInt(value[0]));
  };
  return (
    <Card>
      <CardContent>
        <div id="row-1" className="grid grid-cols-subgrid col-span-4 gap-2">
          <Card className="col-start-1">
            <CardHeader>
              <CardTitle>Armor Class</CardTitle>
              <CardContent>16</CardContent>
            </CardHeader>
          </Card>
          <Card className="col-start-2">
            <CardHeader>
              <CardTitle>Initiative</CardTitle>
              <CardContent>
                {formatModifier(scoreModifier(ABILITY_SCORES[ABILITIES.DEX]))}
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-start-3">
            <CardHeader>
              <CardTitle>Speed</CardTitle>
              <CardContent>30</CardContent>
            </CardHeader>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Hit Points</CardTitle>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Max Hit Points</CardTitle>
              </CardHeader>
              <CardContent>{MAX_HITPOINTS}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Current Hit Points</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  value={hitPoints}
                  type="number"
                  onChange={(evt) => {
                    console.log(evt);
                    setHitPoints(evt.target.value);
                  }}
                ></Input>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <div id="row-3" className="grid grid-cols-subgrid col-span-4">
          <Card className="col-start-1">
            <CardHeader>
              <CardTitle>Hit Dice</CardTitle>
            </CardHeader>
            <CardContent>
              <Card>
                <CardContent className="flex align-baseline justify-between">
                  <Button onClick={() => updateHitDice(1)}>
                    <Plus />
                  </Button>
                  {hitDiceCount}/{LEVEL}
                  <Button onClick={() => updateHitDice(-1)}>
                    <Minus />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>d{HIT_DIE}</CardTitle>
                </CardHeader>
                <CardContent>
                  <DiceRoller sides={HIT_DIE} count={1} modifier={0} />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          <Card className="col-start-3">
            <CardHeader>
              <CardTitle>Death Saves</CardTitle>
            </CardHeader>
            <CardContent>
              <Card>
                <CardHeader>
                  <CardTitle>Successes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Ratings
                    onClick={() => setSuccess(success + 1)}
                    rating={success}
                    totalStars={3}
                    Icon={<Heart />}
                  />
                  <Button onClick={() => setSuccess(0)}>
                    <RotateCcw />
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Failures</CardTitle>
                </CardHeader>
                <CardContent>
                  <Ratings
                    onClick={() => setFailure(failure + 1)}
                    rating={failure}
                    totalStars={3}
                    variant="destructive"
                    Icon={<Skull />}
                  />
                  <Button onClick={() => setFailure(0)}>
                    <RotateCcw />
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
