import React from "react";
import { techStack } from "./data";
import { FaLayerGroup } from "react-icons/fa6";
import SectionContainer from "./section-container";

const SectionTech = () => {
  return (
    <SectionContainer icon={FaLayerGroup} name="Tech Stack" id="tech">
      <ul className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-2">
        {techStack.map(({ description, icon: Icon, name }, index) => (
          <li
            key={index}
            className=" border border-background/20 bg-background p-4 rounded-2xl"
          >
            <Icon size={40} className="text-primary" />
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-muted-foreground text-sm">{description}</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default SectionTech;
