import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "./data";
import Link from "next/link";
import { AlignRight, Sparkle } from "lucide-react";

const SideSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-white/80 py-3 px-6 rounded-3xl md:hidden hover:animate-spin">
        <AlignRight className=" shrink-0" />
      </SheetTrigger>
      <SheetContent className="w-full bg-primary/20 backdrop-blur-md border-0 p-2">
        <SheetHeader hidden={true}>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="space-y-4 bg-background/20 p-4 rounded-2xl">
          <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
            <Sparkle />
            <span>Menu</span>
          </div>
          <ul className="flex flex-col items-center gap-2">
            {links.map(({ link, name }, index) => (
              <li
                key={index}
                className="bg-background px-4 py-3 w-full rounded-3xl font-bold"
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
