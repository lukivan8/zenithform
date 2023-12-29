"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/shad/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shad/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/shad/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/shad/ui/popover";
import ChevronDown from "./+icons/chevron-down";
import { Card, CardContent } from "@/shad/ui/card";
import { useState } from "react";
import XCircle from "./+icons/x-circle";

type ListElem = {
  value: string;
  label: string;
};

type Props = {
  placeholder?: string;
  list: ListElem[];
};

export function MultipleCombobox({ list, placeholder }: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [statusList, setStatusList] = useState<string[]>([]);

  return (
    <div>
      <div className="flex flex-wrap pb-2 gap-2">
        {statusList.map((status, i) => (
          <div
            className="border rounded-full p-2 px-3 text-xs flex gap-2 items-center"
            key={i}
          >
            <p>{status}</p>
            <XCircle
              className="cursor-pointer"
              onClick={() =>
                setStatusList((curr) => {
                  const newList = [...curr];
                  newList.splice(i, 1);
                  return newList;
                })
              }
            ></XCircle>
          </div>
        ))}
      </div>

      {isDesktop ? (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="min-w-[150px] gap-2 justify-between"
            >
              {placeholder ? (
                <>
                  {placeholder} <ChevronDown />
                </>
              ) : (
                <>
                  Выберите несколько <ChevronDown />
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <StatusList
              list={list}
              setOpen={setOpen}
              setSelectedStatus={(str: string | null) =>
                setStatusList((curr) => {
                  const newList = [...curr];
                  str && newList.push(str);
                  return newList;
                })
              }
            />
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="min-w-[150px] gap-2 justify-between"
            >
              {placeholder ? (
                <>
                  {placeholder} <ChevronDown />
                </>
              ) : (
                <>
                  Выберите несколько <ChevronDown />
                </>
              )}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mt-4 border-t">
              <StatusList
                list={list}
                setOpen={setOpen}
                setSelectedStatus={(str: string | null) =>
                  setStatusList((curr) => {
                    const newList = [...curr];
                    str && newList.push(str);
                    return newList;
                  })
                }
              />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
  list,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: string | null) => void;
  list: ListElem[];
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {list.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value: string) => {
                setSelectedStatus(
                  list.find((priority) => priority.value === value)?.label ||
                    null
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
