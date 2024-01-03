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
import { useEffect, useState } from "react";
import XCircle from "./+icons/x-circle";
import BadgeSelected from "./badge";

export type ListElem = {
  value: string;
  label: string;
  amount?: number;
};

type Props = {
  placeholder?: string;
  list: ListElem[];
};

export function MultipleCombobox({ list, placeholder }: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [statusList, setStatusList] = useState<ListElem[]>([]);

  useEffect(() => {
    list.map((elem) => {
      elem.amount ?? (elem.amount = 1);
      return elem;
    });
  }, []);

  useEffect(() => {
    statusList.forEach((status, i) =>
      console.log(`${status.value}+${i.toString()}`)
    );
  }, [statusList]);

  return (
    <div>
      <div className="flex flex-wrap pb-2 gap-2">
        {statusList.map((status, i) => (
          <BadgeSelected
            key={`${status}+${i}`}
            value={status.value}
            label={status.label}
            increment={() => {
              const newList = [...statusList];
              newList[i].amount = newList[i].amount! + 1;

              setStatusList(newList);
            }}
            decrement={() => {
              const newList = [...statusList];
              newList[i].amount = newList[i].amount! - 1;
              if (newList[i].amount! <= 0) {
                newList.splice(i, 1);
                setStatusList(newList);
              } else {
                setStatusList(newList);
              }
            }}
          />
        ))}
      </div>

      {isDesktop ? (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="min-w-[150px] gap-2 justify-between bg-black">
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
              setSelectedStatus={(elem: ListElem | null) =>
                setStatusList((curr) => {
                  const newList = [...curr];
                  elem && newList.push(elem);
                  return newList;
                })
              }
            />
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button className="min-w-[150px] gap-2 justify-between bg-black">
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
                setSelectedStatus={(elem: ListElem | null) =>
                  setStatusList((curr) => {
                    const newList = [...curr];
                    elem && newList.push(elem);
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
  setSelectedStatus: (status: ListElem | null) => void;
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
                  list.find((priority) => priority.value === value) || null
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
