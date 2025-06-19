import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleFadingArrowUp } from "lucide-react";
import { Trash2 } from "lucide-react";
import React from "react";

type Seed = {
  _id: number;
  name: string;
  modifiers: string[];
  seedlingToYoungTime: string;
  youngToMatureTime: string;
  matureToElderTime: string;
};

type SeedTableProps = {
  seeds: Seed[];
};

const SeedTable = ({ seeds }: SeedTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your planted seeds.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Seed</TableHead>
          <TableHead>Modifiers</TableHead>
          <TableHead>Time to Next Stage</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {seeds.map((seed: Seed) => (
          <TableRow key={seed._id}>
            <TableCell>{seed.name}</TableCell>
            <TableCell className="text-white/50">
              {seed.modifiers.join(", ")}
            </TableCell>
            <TableCell>{seed.seedlingToYoungTime}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button disabled={true} size="icon">
                  <CircleFadingArrowUp />
                </Button>
                <Button size="icon" variant="destructive">
                  <Trash2 />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SeedTable;
