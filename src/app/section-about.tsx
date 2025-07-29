import { FaUser } from "react-icons/fa6";
import { aboutMe } from "./data";
import { ChevronRight } from "lucide-react";

const SectionAbout = () => {
  const { icon: Icon, description, infoCards } = aboutMe;
  return (
    <section
      id="about"
      className="p-2 md:p-4 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2 md:space-y-4"
    >
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <FaUser size={20} />
        <span>About me</span>
      </div>

      <div className="space-y-2 xl:flex gap-3">
        <div className="bg-background p-4 rounded-2xl xl:w-2/3 ">
          <Icon size={30} className="text-primary" />
          <h1 className="font-bold text-primary">Description</h1>
          <p className="mt-2">{description}</p>
        </div>
        <ul className="space-y-2 w-full">
          {infoCards.map(({ infos, title, icon: Icon }, index) => (
            <li key={index} className="space-y-2 bg-background p-4 rounded-2xl">
              <div className="flex items-center justify-between text-primary">
                <h1 className="font-bold">{title}</h1>
                <Icon />
              </div>
              <ul>
                {infos.map((info, index) => (
                  <li key={index} className="flex gap-1">
                    <ChevronRight size={15} className="mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {info}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionAbout;
