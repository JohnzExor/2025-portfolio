import { FolderGit } from "lucide-react";
import { projects } from "./data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const SectionProjects = () => {
  return (
    <section className="p-2 md:p-4 rounded-3xl bg-white/50 backdrop-blur-lg border border-white/20 space-y-2 md:space-y-4">
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <FolderGit />
        <span>Projects</span>
      </div>
      <ul className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-3">
        {projects.map(({ description, image, name, stack }, index) => (
          <li
            key={index}
            className="bg-background rounded-2xl overflow-hidden p-4 border border-white/20 space-y-2"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={image}
                fill
                alt={name}
                className="object-cover rounded-2xl"
              />
            </div>
            <h1 className="text-primary text-xl font-bold">{name}</h1>
            <ul className="flex gap-1">
              {stack.map((name, index) => (
                <li key={index}>
                  <Badge>{name}</Badge>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionProjects;
