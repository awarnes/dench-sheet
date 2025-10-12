import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import HoverFeature from "~/components/hover-feature/hover-feature";
import { FEATURES } from "~/character-data";

export default function Features() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Features</CardTitle>
      </CardHeader>
      <CardContent>
        {FEATURES.map((feature) => (
          <HoverFeature
            title={feature.title}
            description={feature.description}
            type={feature.type}
            extra={feature.extra}
          />
        ))}
      </CardContent>
    </Card>
  );
}
