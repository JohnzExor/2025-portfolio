"use client";

import { links } from "./data";
import Link from "next/link";
import SideSheet from "./side-sheet";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { CodeXml } from "lucide-react";
import { act, useState } from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>("#home");

  return (
    <header className="mx-1 md:mx-0 p-1 md:p-2 flex items-center justify-between bg-background/50 backdrop-blur-lg border border-background/20 rounded-4xl mt-2 md:mt-4 sticky top-2 md:top-4 z-50 shadow">
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="flex items-center gap-2 bg-background/80 py-3 px-6 rounded-3xl"
        >
          <CodeXml />
          <label className="font-bold text-primary">Johnz.Dev</label>
        </Link>
        <ModeToggle />
      </div>

      <ul className="hidden md:flex gap-4 bg-background/80 p-1 rounded-3xl">
        {links.map(({ link, name, icon: Icon }, index) => (
          <li key={index}>
            <Link
              href={link}
              onClick={() => setActivePath(link)}
              className={clsx("flex items-center group py-2 px-4", {
                "bg-primary rounded-3xl text-background": activePath === link,
                "text-primary": activePath !== link,
              })}
            >
              <Icon size={20} className="shrink-0" />
              <span
                className={clsx(
                  "w-0 group-hover:w-full opacity-0  group-hover:ml-3 group-hover:opacity-100 duration-300 ease-in",
                  { "opacity-100 ml-3 w-auto": activePath === link }
                )}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <SideSheet />
    </header>
  );
};

export default Header;
