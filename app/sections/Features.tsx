import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import HoverFeature from "~/components/hover-feature/hover-feature";
import { FEATURES } from "~/character-data";
import RageManager from "~/components/barbarian-managers/rage-manager";
import FrenzyManager from "~/components/barbarian-managers/frenzy-manager";

export default function Features() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Features</CardTitle>
      </CardHeader>
      <CardContent>
        {FEATURES.map((feature, ind) => (
          <HoverFeature
            key={ind}
            title={feature.title}
            description={feature.description}
            type={feature.type}
            extra={feature.extra}
          />
        ))}
        <RageManager />
        <FrenzyManager />
      </CardContent>
    </Card>
  );
}
