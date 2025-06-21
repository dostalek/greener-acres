import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import seeds from "@/data/seeds";
import { SeedCardProps } from "@/types/seed";
import React from "react";

const SeedCard = ({ seedName, seedStage, seedProgress }: SeedCardProps) => {
  return (
    <Card className="w-[291px]">
      <CardHeader>
        <div className="flex justify-between items-baseline">
          <CardTitle className="pb-3">{seedName}</CardTitle>
          <Badge variant="outline">{seedStage}</Badge>
        </div>
        <Progress value={seedProgress} />
      </CardHeader>
    </Card>
  );
};

export default SeedCard;
