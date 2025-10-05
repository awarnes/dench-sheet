import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { ButtonGroup } from "../components/ui/button-group";
import { Card, CardAction, CardHeader, CardTitle } from "../components/ui/card";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const count = JSON.parse(localStorage.getItem("count") ?? "0");
    if (count) {
      setCount(count);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Count: {count}</CardTitle>
        <CardAction>
          <ButtonGroup>
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <Button onClick={() => setCount(count - 1)}>-</Button>
          </ButtonGroup>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
