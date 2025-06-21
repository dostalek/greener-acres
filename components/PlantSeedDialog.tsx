"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import seeds from "@/data/seeds";
import { Seed, SeedCardProps } from "@/types/seed";
import { Plus } from "lucide-react";
import { MouseEventHandler, useState } from "react";

import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type PlantSeedDialogProps = {
  onAddSeed: ({ seedName, seedStage, seedProgress }: SeedCardProps) => void;
};

export function PlantSeedDialog({ onAddSeed }: PlantSeedDialogProps) {
  const [selectedSeed, setSelectedSeed] = useState<Seed>(null);
  const [selectedModifiers, setSelectedModifiers] = useState<Set<string>>();

  const handleOnChange = (value: keyof Seed) => {
    setSelectedModifiers(new Set());
    setSelectedSeed(seeds[value]);
  };

  const handleOnOpen = (open: boolean) => {
    // Wait for dialog to fully close before resetting selected seed
    setTimeout(() => setSelectedSeed(null), 200);
  };

  const handleOnClick = (modifier: string) => {
    const selected = new Set(selectedModifiers);
    if (selected.has(modifier)) {
      selected.delete(modifier);
    } else {
      selected.add(modifier);
    }
    setSelectedModifiers(selected);
  };

  return (
    <Dialog onOpenChange={handleOnOpen}>
      <form>
        <div className="flex justify-end">
          <DialogTrigger asChild>
            <Button>
              <Plus />
              Plant New Seed
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Plant a new seed</DialogTitle>
            <DialogDescription>
              Select a seed and its modifiers. Click plant when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid w-full gap-3">
              <Label>Seed</Label>
              <Select onValueChange={handleOnChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a seed" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(seeds).map((seedName) => (
                    <SelectItem key={seedName} value={seedName}>
                      {seedName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {!selectedSeed ? (
              <></>
            ) : (
              <div className="grid gap-3">
                <Label>Modifiers</Label>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(selectedSeed.modifiers).map((modifier) => (
                    <Badge
                      key={modifier}
                      onClick={() => handleOnClick(modifier)}
                      variant={
                        selectedModifiers?.has(modifier) ? "default" : "outline"
                      }
                      className="cursor-pointer select-none"
                      asChild
                    >
                      {/* Wrapping a button so it can be selected by pressing TAB, ENTER */}
                      <button>{modifier}</button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                disabled={!selectedSeed}
                type="submit"
                onClick={() =>
                  selectedSeed
                    ? onAddSeed({
                        seedName: selectedSeed.name,
                        seedStage: "Seedling",
                        seedProgress: 33,
                      })
                    : console.log("No seed selected")
                }
              >
                Plant seed
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
