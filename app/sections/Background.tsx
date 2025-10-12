import { Card, CardContent } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export default function Background() {
  return (
    <Card>
      <CardContent className="-my-2">
        <div className="my-2">
          <Label htmlFor="personality">Personality</Label>
          <Textarea placeholder="Chop the wood" id="personality" />
        </div>
        <div className="my-2">
          <Label htmlFor="ideals">Ideals</Label>
          <Textarea placeholder="Always chop better" id="ideals" />
        </div>
        <div className="my-2">
          <Label htmlFor="bonds">Bonds</Label>
          <Textarea id="bonds" />
        </div>
        <div className="my-2">
          <Label htmlFor="flaws">Flaws</Label>
          <Textarea placeholder="Sometimes too much chop" id="flaws" />
        </div>
      </CardContent>
    </Card>
  );
}
