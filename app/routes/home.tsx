import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dench Splitsail" },
    { name: "description", content: "Character sheet for Dench the Bench" },
  ];
}

export default function Home() {
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
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
