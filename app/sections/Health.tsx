import { useEffect, useState } from "react";
import { Plus, Minus, Heart, Skull, RotateCcw } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "~/components/ui/button-group";
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
  useEffect(() => {
    const succ = JSON.parse(localStorage.getItem("success") ?? "0");
    if (succ) {
      setSuccess(succ);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("success", JSON.stringify(success));
  }, [success]);

  const [failure, setFailure] = useState(0);
  useEffect(() => {
    const fail = JSON.parse(localStorage.getItem("failure") ?? "0");
    if (fail) {
      setFailure(fail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("failure", JSON.stringify(failure));
  }, [failure]);

  const [hitDiceCount, setHitDiceCount] = useState(LEVEL);
  useEffect(() => {
    const hd = JSON.parse(localStorage.getItem("hitDiceCount") ?? `${LEVEL}`);
    if (hd) {
      setHitDiceCount(hd);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hitDiceCount", JSON.stringify(hitDiceCount));
  }, [hitDiceCount]);

  const [hitPoints, setHitPoints] = useState(MAX_HITPOINTS.toString());

  useEffect(() => {
    const hp = localStorage.getItem("hit_points") ?? MAX_HITPOINTS.toString();
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
                <ButtonGroup>
                  <Input
                    value={hitPoints}
                    type="number"
                    onChange={(evt) => setHitPoints(evt.target.value)}
                  ></Input>
                  <ButtonGroupSeparator />
                  <Button
                    onClick={() => setHitPoints(MAX_HITPOINTS.toString())}
                  >
                    <RotateCcw />
                  </Button>
                </ButtonGroup>
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
                  <ButtonGroup>
                    <Ratings
                      onClick={() => setSuccess(Math.min(success + 1, 3))}
                      rating={success}
                      totalstars={3}
                      icon={<Heart />}
                    />
                    <ButtonGroupSeparator />
                    <Button onClick={() => setSuccess(0)}>
                      <RotateCcw />
                    </Button>
                  </ButtonGroup>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Failures</CardTitle>
                </CardHeader>
                <CardContent>
                  <ButtonGroup>
                    <Ratings
                      onClick={() => setFailure(Math.min(failure + 1, 3))}
                      rating={failure}
                      totalstars={3}
                      variant="destructive"
                      icon={<Skull />}
                    />
                    <ButtonGroupSeparator />
                    <Button onClick={() => setFailure(0)}>
                      <RotateCcw />
                    </Button>
                  </ButtonGroup>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
