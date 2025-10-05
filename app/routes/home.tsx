import type { Route } from "./+types/home";
import Counter from "../components/counter/counter";
import DiceRoller from "../components/dice/dice-roller";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dench Splitsail" },
    { name: "description", content: "Character sheet for Dench the Bench" },
  ];
}

export default function Home() {
  return (
    <>
      <DiceRoller sides={6} count={3} />
      <Counter />
    </>
  );
}
