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
import { Plus } from "lucide-react";
import { useState } from "react";

import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Seed = {
  name: string;
  modifiers: { [key: string]: number };
  seedlingToYoungTime: { hours: number; minutes: number };
  youngToMatureTime: { hours: number; minutes: number };
  matureToElderTime: { hours: number; minutes: number };
};

export function PlantSeedDialog() {
  const [seed, setSeed] = useState<Seed>();

  const handleOnChange = (selection: keyof typeof seeds) => {
    setSeed(seeds[selection]);
    console.log(seed);
  };

  const handleOnOpen = (open: boolean) => {
    setSeed(undefined);
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
            <DialogTitle>Plant seed</DialogTitle>
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
            <div className="grid gap-3">
              <Label>Modifiers</Label>
              {seed ? (
                Object.keys(seed.modifiers).map((modifier) => (
                  <div className="flex items-center gap-2" key={modifier}>
                    <Checkbox />
                    <p>{modifier}</p>
                  </div>
                ))
              ) : (
                <DialogDescription>Select a seed</DialogDescription>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Plant seed</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
