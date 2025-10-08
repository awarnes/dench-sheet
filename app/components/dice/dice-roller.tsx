import { DicesIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Die from "./die";
import DiceDisplay from "./dice-display";
import type { DiceRoll } from "../../character-data";

export default function DiceRoller({
  sides,
  count = 1,
  modifier = 0,
}: DiceRoll) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <DicesIcon />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Rolling{" "}
            <DiceDisplay count={count} sides={sides} modifier={modifier} />
          </DialogTitle>
        </DialogHeader>
        <Die sides={sides} count={count} modifier={modifier} />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
