import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { SeedCardProps } from "@/types/seed";
import React from "react";

// import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const temp_modifers = [
  "Tropical Garden Gnome (+25%)",
  "Pixie (+20%)",
  "Egg Basket (+15%)",
  "Red Barn Farm (+15%)",
];

const SeedCard = ({ seedName, seedStage, seedProgress }: SeedCardProps) => {
  return (
    <Card className="w-[291px] gap-3">
      <CardHeader>
        <div className="flex justify-between items-baseline pb-3">
          <CardTitle>{seedName}</CardTitle>
          <Badge variant="outline">{seedStage}</Badge>
        </div>
        <Progress value={seedProgress} />
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex justify-between">
          <p>Seedling → Young</p>
          <p className="font-bold">13h 00m</p>
        </div>
        <div className="flex justify-between text-card-foreground/25">
          <p>Young → Mature</p>
          <p className="font-bold">29h 00m</p>
        </div>
        <div className="flex justify-between text-card-foreground/25">
          <p>Mature → Elder</p>
          <p className="font-bold">216h 00m</p>
        </div>

        <div className="py-3">
          <Separator></Separator>
        </div>
        <Label className="text-card-foreground/75 pb-2">Active Modifiers</Label>
        <div className="flex flex-wrap gap-2">
          {temp_modifers.map((modifier) => (
            <Badge key={modifier}>{modifier}</Badge>
          ))}
          {/* For if I decide to limit the number of line wraps */}
          {/* <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline">+4</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Litter (+10%)</p>
            </TooltipContent>
          </Tooltip> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default SeedCard;
