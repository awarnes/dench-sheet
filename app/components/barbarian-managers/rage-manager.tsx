import { useEffect, useState } from "react";
import { Angry, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Ratings } from "../ui/ratings";
import { ButtonGroup, ButtonGroupSeparator } from "../ui/button-group";
import { Button } from "../ui/button";
import { MAX_RAGES } from "~/character-data";

export default function RageManager() {
  const [rage, setRage] = useState(MAX_RAGES);

  useEffect(() => {
    const rg = JSON.parse(localStorage.getItem("rage") ?? "0");
    if (rg) {
      setRage(rg);
    }
  }, []);

  useEffect(() => localStorage.setItem("rage", JSON.stringify(rage)), [rage]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rages</CardTitle>
      </CardHeader>
      <CardContent>
        <ButtonGroup>
          <Ratings
            onClick={() => setRage(Math.min(rage + 1, MAX_RAGES))}
            rating={rage}
            totalStars={MAX_RAGES}
            icon={<Angry />}
          />
          <ButtonGroupSeparator />
          <Button onClick={() => setRage(0)}>
            <RotateCcw />
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
