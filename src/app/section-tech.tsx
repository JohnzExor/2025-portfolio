import React from "react";
import { techStack } from "./data";
import { FaLayerGroup } from "react-icons/fa6";

const SectionTech = () => {
  return (
    <section
      id="tech"
      className="p-2 md:p-4 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2 md:space-y-4"
    >
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <FaLayerGroup size={20} />
        <span>Tech Stack</span>
      </div>
      <ul className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-3">
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
    </section>
  );
};

export default SectionTech;
