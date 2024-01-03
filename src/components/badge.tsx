import { Button } from "@/shad/ui/button";
import React, { useEffect, useState } from "react";

type BadgeProps = {
  value: string;
  label: string;
  decrement: () => void;
  increment: () => void;
};

export default function BadgeSelected({
  value,
  label,
  decrement,
  increment,
}: BadgeProps) {
  const [amount, setAmount] = useState(1);

  if (amount <= 0) {
    return null;
  }
  return (
    <div className="border rounded-full py-0 px-2 text-xs flex  items-center cursor-default bg-black">
      <p>{label}</p>
      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant="ghost"
          className="hover:bg-transparent"
          size="sm"
          onClick={() => setAmount((prev) => prev - 1)}
        >
          -
        </Button>
        {amount}
        <Button
          type="button"
          variant="ghost"
          className="hover:bg-transparent"
          size="sm"
          onClick={() => setAmount((prev) => prev + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
}
