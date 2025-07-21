import { links } from "./data";
import Link from "next/link";
import SideSheet from "./side-sheet";

const Header = () => {
  return (
    <header className="mx-2 md:mx-0 p-2 flex items-center justify-between bg-white/50 backdrop-blur-lg border border-white/20 rounded-4xl mt-2 md:mt-4 sticky top-2 md:top-4 z-50 shadow">
      <Link
        href={"/"}
        className="flex items-center gap-2 bg-white/80 py-3 px-6 rounded-3xl hover:scale-105 hover:ml-2 duration-500 ease-in-out"
      >
        <div className="w-6 h-6 bg-primary rounded-full"></div>
        <label className="font-bold text-primary">Johnz.Dev</label>
      </Link>
      {/* <HeaderNavigationMenu /> */}
      {/* <ModeToggle /> */}
      {/* <div className="bg-white/80 py-3 px-6 rounded-3xl text-sm flex items-center gap-2">
        <div className="w-3 h-3 bg-green-300 rounded-full"></div>
        <span>Open to work</span>
      </div> */}
      <ul className="hidden md:flex gap-4 bg-white/80 py-3 px-6 rounded-3xl hover:scale-105 hover:mr-2 duration-500 ease-in-out">
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
