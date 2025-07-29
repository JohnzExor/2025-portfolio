import { projects } from "./data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaBoxArchive } from "react-icons/fa6";

const SectionProjects = () => {
  return (
    <section
      id="projects"
      className="p-2 md:p-4 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2 md:space-y-4"
    >
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <FaBoxArchive size={20} />
        <span>Projects</span>
      </div>
      <ul className="space-y-2 lg:space-y-0 lg:grid grid-cols-2 gap-3">
        {projects.map(({ description, image, name, stack, link }, index) => (
          <li
            key={index}
            className="bg-background rounded-3xl overflow-hidden p-4 border border-background/20 "
          >
            <Link target="_blank" href={link} className="space-y-2">
              <div className="relative w-full h-[200px]">
                <Image
                  src={image}
                  fill
                  alt={name}
                  className="object-cover rounded-xl"
                />
              </div>
              <h1 className="text-lg font-bold">{name}</h1>
              <ul className="flex gap-1">
                {stack.map((name, index) => (
                  <li key={index}>
                    <Badge>{name}</Badge>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionProjects;
