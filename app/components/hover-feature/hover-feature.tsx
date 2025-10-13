import { FeatureType } from "~/character-data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import type { ReactElement } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

type ValueOf<T> = T[keyof T];

interface HoverFeatureProps {
  title: string;
  description: string;
  type: ValueOf<typeof FeatureType>;
  extra: string | ReactElement;
}

function getFeatureType(type: ValueOf<typeof FeatureType>): string {
  switch (type) {
    case FeatureType.Action:
      return "A";
    case FeatureType.BonusAction:
      return "BA";
    case FeatureType.Passive:
      return "P";
    default:
      return "";
  }
}

export default function HoverFeature(props: HoverFeatureProps) {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>{props.title}</HoverCardTrigger>

        <HoverCardContent>
          <div>
            <Avatar>
              <AvatarFallback>{getFeatureType(props.type)}</AvatarFallback>
            </Avatar>
            <p className="text-sm">{props.description}</p>
            {props.extra ? props.extra : <></>}
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
