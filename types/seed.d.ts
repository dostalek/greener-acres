import seeds from "@/data/seeds";

export type SeedCardProps = {
  seedName: keyof typeof seeds;
  seedStage: "Seedling" | "Young" | "Mature" | "Elder";
  seedProgress: number;
  // seedModifiers: string[];
};

export type SeedData = {
  id: number;
  seedName: keyof typeof seeds;
  seedStage: "Seedling" | "Young" | "Mature" | "Elder";
  seedProgress: number;
  // seedModifiers: string[];
};

export type Seed = {
  name: keyof typeof seeds;
  modifiers: { [key: string]: number };
  seedlingToYoungTime: { hours: number; minutes: number };
  youngToMatureTime: { hours: number; minutes: number };
  matureToElderTime: { hours: number; minutes: number };
} | null;
