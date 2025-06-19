import { PlantSeedDialog } from "@/components/PlantSeedDialog";
import SeedTable from "@/components/SeedTable";

var seeds = [
  {
    _id: 0,
    name: "Couch Potatoes",
    modifiers: [
      "Tropical Garden Gnome (+25%)",
      "Pixie (+20%)",
      "Sandwich Station (+20%)",
      "Red Barn Farm (+15%)",
      "King Parsley (+10%)",
      "Litter (+10%)",
    ],
    seedlingToYoungTime: "13h 00m",
    youngToMatureTime: "29h 00m",
    matureToElderTime: "216h 00m",
  },
  {
    _id: 1,
    name: "Evil Magma Peas",
    modifiers: [
      "Djembe Drum (+25%)",
      "Tropical Garden Gnome (+25%)",
      "Boom Shroom (+20%)",
      "Egg Basket (+20%)",
      "Pixie (+20%)",
      "Red Barn Farm (+15%)",
    ],
    seedlingToYoungTime: "15h 00m",
    youngToMatureTime: "32h 15m",
    matureToElderTime: "240h 00m",
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <PlantSeedDialog />
      <div className="flex justify-end"></div>
      <div className="pt-4">
        <SeedTable seeds={seeds} />
      </div>
    </div>
  );
}
