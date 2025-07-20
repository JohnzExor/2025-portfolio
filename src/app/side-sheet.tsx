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
import { AlignRight } from "lucide-react";

const SideSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-white/80 py-3 px-6 rounded-3xl md:hidden">
        <AlignRight className=" shrink-0" />
      </SheetTrigger>
      <SheetContent>
        <ul>
          {links.map(({ link, name }, index) => (
            <li key={index}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default SideSheet;
