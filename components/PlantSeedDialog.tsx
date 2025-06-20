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
import { Seed } from "@/types/seed";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function PlantSeedDialog() {
  const [selectedSeed, setSelectedSeed] = useState<Seed>(null);
  const [selectedModifiers, setselectedModifiers] = useState<string[][]>();

  const handleOnChange = (value: keyof Seed) => {
    setSelectedSeed(seeds[value]);
    console.log(selectedSeed);
  };

  const handleOnOpen = (open: boolean) => {
    setSelectedSeed(null);
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
              {/* <DialogDescription>Select a seed</DialogDescription> */}
            </div>
            <div className="grid gap-3">
              <Label>Modifiers</Label>
              <div className="flex flex-wrap gap-2">
                {selectedSeed ? (
                  Object.keys(selectedSeed.modifiers).map((modifier) => (
                    // <div className="flex items-center gap-2" key={modifier}>
                    //   <Checkbox />
                    //   <p>{modifier}</p>
                    // </div>
                    <Badge key={modifier} variant="outline" asChild>
                      <button className="cursor-pointer">{modifier}</button>
                    </Badge>
                  ))
                ) : (
                  <></>
                )}
              </div>
              {/* <DialogDescription>Select modifiers</DialogDescription> */}
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
