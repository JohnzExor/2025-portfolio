"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links, socials } from "./data";
import Link from "next/link";
import { AlignRight, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PiSparkleFill } from "react-icons/pi";
import { FaChevronRight, FaLink, FaX } from "react-icons/fa6";
const SideSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="bg-background/80 py-3 px-6 rounded-3xl md:hidden hover:animate-spin">
        <AlignRight className=" shrink-0" />
      </SheetTrigger>
      <SheetContent className="w-full bg-primary/20 backdrop-blur-md border-0">
        <SheetHeader hidden={true}>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="space-y-2 bg-background/20 p-2 rounded-l-2xl h-full flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
              <PiSparkleFill size={20} />
              <span>Menu</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary"
            >
              <FaX size={20} />
            </button>
          </div>

          <div className="bg-background rounded-2xl p-4 flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/images/profile.jpeg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="-space-y-2">
              <h1 className="text-sm text-muted-foreground">Portfolio of</h1>
              <span className="text-lg font-bold">Johnzyll Jimeno</span>
            </div>
          </div>

          <ul className="px-4 space-y-5 bg-background rounded-2xl py-4">
            {links.map(({ link, name, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  onClick={() => setIsOpen(false)}
                  className="text-xl flex items-center text-primary gap-4"
                >
                  <Icon />
                  <span>{name}</span>
                  <ChevronRight className="ml-auto" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
              <FaLink size={20} />
              <span>Links</span>
            </div>
            <ul className="bg-background grid grid-cols-2 gap-4 p-4 rounded-2xl">
              {socials.map(({ username, name, link }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    className="-space-y-2 flex justify-between items-center"
                  >
                    <div>
                      <h1 className="font-bold text-primary">{name}</h1>
                      <span className="text-sm">{username}</span>
                    </div>
                    <FaChevronRight className="text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span className="text-center text-xs mt-auto">
            © 2025 Johnzyll Jimeno | <br /> Portfolio. All rights reserved.
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
