"use client";

import { PlantSeedDialog } from "@/components/PlantSeedDialog";
import SeedCard from "@/components/SeedCard";
import { useState } from "react";

export default function Home() {
  const [seedCards, setSeedCards] = useState();

  return (
    <div className="p-4">
      <PlantSeedDialog />
      <div className="flex justify-end"></div>
      <div className="pt-4">
        <SeedCard
          seedName="Couch Potatoes"
          seedStage="Seedling"
          seedProgress={33}
        />
      </div>
    </div>
  );
}
