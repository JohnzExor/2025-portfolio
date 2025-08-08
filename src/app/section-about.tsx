import { FaUser } from "react-icons/fa6";
import { aboutMe } from "./data";
import { ChevronRight } from "lucide-react";
import SectionContainer from "./section-container";

const SectionAbout = () => {
  const { icon: Icon, description, infoCards } = aboutMe;
  return (
    <SectionContainer icon={FaUser} name="About" id="about">
      <div className="space-y-2 xl:flex gap-2">
        <div className="bg-background p-4 rounded-2xl xl:max-w-1/2">
          <div className="flex items-center gap-2">
            <Icon size={30} className="text-primary" />
            <h1 className="font-bold text-primary">Description</h1>
          </div>
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
    </SectionContainer>
  );
};

export default SectionAbout;
