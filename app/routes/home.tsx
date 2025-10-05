import type { Route } from "./+types/home";
import Counter from "../counter/counter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dench Splitsail" },
    { name: "description", content: "Character sheet for Dench the Bench" },
  ];
}

export default function Home() {
  return <Counter />;
}
