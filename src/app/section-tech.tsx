import { Layers2 } from "lucide-react";
import React from "react";
import { techStack } from "./data";
import Image from "next/image";

const SectionTech = () => {
  return (
    <section
      id="tech"
      className="p-2 md:p-4 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2 md:space-y-4"
    >
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <Layers2 />
        <span>Tech Stack</span>
      </div>
      <ul className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-3">
        {techStack.map(({ description, image, name }, index) => (
          <li
            key={index}
            className=" border border-background/20 bg-background p-4 rounded-2xl space-y-2"
          >
            <div className="relative w-[50px] h-[50px]">
              <Image src={image} fill alt={name} className="object-cover" />
            </div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionTech;
