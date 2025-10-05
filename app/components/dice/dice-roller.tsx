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
import Die, { formatModifier } from "./die";

export type DiceRollerProps = {
  sides: number;
  count?: number;
  modifier?: number;
};

export default function DiceRoller({
  sides,
  count = 1,
  modifier = 0,
}: DiceRollerProps) {
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
            Rolling {count}d{sides}
            {formatModifier(modifier)}
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
