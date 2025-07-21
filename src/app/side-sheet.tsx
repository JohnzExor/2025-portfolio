"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "./data";
import Link from "next/link";
import { AlignRight, Sparkle, X } from "lucide-react";
import { useState } from "react";

const SideSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="bg-background/80 py-3 px-6 rounded-3xl md:hidden hover:animate-spin">
        <AlignRight className=" shrink-0" />
      </SheetTrigger>
      <SheetContent className="w-full bg-primary/20 backdrop-blur-md border-0 p-2">
        <SheetHeader hidden={true}>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="space-y-4 bg-background/20 p-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
              <Sparkle />
              <span>Menu</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary"
            >
              <X />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-4 bg-background rounded-2xl py-4">
            {links.map(({ link, name }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  onClick={() => setIsOpen(false)}
                  className="text-xl"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
