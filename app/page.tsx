"use client";

import { PlantSeedDialog } from "@/components/PlantSeedDialog";
import SeedCard from "@/components/SeedCard";
import { SeedCardProps } from "@/types/seed";
import { useState } from "react";

export default function Home() {
  const [seedCards, setSeedCards] = useState<SeedCardProps[]>();

  const handlePlantSeed = () => {};

  return (
    <div className="p-4 w-1/2 mx-auto">
      <PlantSeedDialog />
      <div className="flex justify-end"></div>
      <div className="pt-4">
        <SeedCard
          seedName="Couch Potatoes"
          seedStage="Seedling"
          seedProgress={33}
          seedModifiers={["Placeholder"]}
        />
      </div>
    </div>
  );
}
