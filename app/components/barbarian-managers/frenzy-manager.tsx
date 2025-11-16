import { useState, useEffect } from "react";
import { Zap, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "../ui/button-group";
import { Ratings } from "../ui/ratings";

export default function RageManager() {
  const [exhaustion, setExhaustion] = useState(0);

  useEffect(() => {
    const exh = JSON.parse(localStorage.getItem("exhaustion") ?? "0");
    if (exh) {
      setExhaustion(exh);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("exhaustion", JSON.stringify(exhaustion));
  }, [exhaustion]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frenzy - Exhaustion</CardTitle>
      </CardHeader>
      <CardContent>
        <ButtonGroup>
          <Ratings
            onClick={() => setExhaustion(Math.min(exhaustion + 1, 6))}
            rating={exhaustion}
            totalstars={6}
            icon={<Zap />}
          />
          <ButtonGroupSeparator />
          <Button onClick={() => setExhaustion(0)}>
            <RotateCcw />
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
