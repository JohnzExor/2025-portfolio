import { links } from "./data";
import Link from "next/link";
import SideSheet from "./side-sheet";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { CodeXml } from "lucide-react";

const Header = () => {
  return (
    <header className="mx-1 md:mx-0 p-2 flex items-center justify-between bg-background/50 backdrop-blur-lg border border-background/20 rounded-4xl mt-2 md:mt-4 sticky top-2 md:top-4 z-50 shadow duration-500 ease-in-out">
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="flex items-center gap-2 bg-background/80 py-3 px-6 rounded-3xl hover:scale-105 hover:ml-2 duration-500 ease-in-out"
        >
          <CodeXml />
          <label className="font-bold text-primary">Johnz.Dev</label>
        </Link>
        <ModeToggle />
      </div>

      <ul className="hidden md:flex gap-4 bg-background/80 py-3 px-6 rounded-3xl hover:scale-105 hover:mr-2 duration-500 ease-in-out">
        {links.map(({ link, name }, index) => (
          <li key={index}>
            <Link
              href={link}
              className="hover:text-primary duration-500 ease-in-out"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <SideSheet />
    </header>
  );
};

export default Header;
