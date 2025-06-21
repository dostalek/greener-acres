"use client";

import { PlantSeedDialog } from "@/components/PlantSeedDialog";
import SeedCard from "@/components/SeedCard";
import { SeedCardProps } from "@/types/seed";
import { SeedData } from "@/types/seed";
import { useState } from "react";

export default function Home() {
  const [seedCards, setSeedCards] = useState<SeedData[]>([]);

  const onAddSeed = ({ seedName, seedStage, seedProgress }: SeedCardProps) => {
    setSeedCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        seedName: seedName,
        seedStage: seedStage,
        seedProgress: seedProgress,
      },
    ]);
  };

  return (
    <div className="p-4">
      <div className="w-[1200px] mx-auto">
        <PlantSeedDialog onAddSeed={onAddSeed} />
        <div className="flex flex-wrap gap-3">
          {seedCards.map((seedCard) => (
            <SeedCard
              key={seedCard.id}
              seedName={seedCard.seedName}
              seedStage={seedCard.seedStage}
              seedProgress={seedCard.seedProgress}
              // seedModifiers={["Placeholder"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
