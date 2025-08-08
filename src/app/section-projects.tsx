import { projects } from "./data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaBoxArchive } from "react-icons/fa6";
import SectionContainer from "./section-container";
import { ChevronRight } from "lucide-react";

const SectionProjects = () => {
  return (
    <SectionContainer icon={FaBoxArchive} name="Projects" id="projects">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {projects.map(({ description, image, name, stack, link }, index) => (
          <li key={index} className="bg-background p-3 rounded-2xl">
            <Link target="_blank" href={link} className="space-y-2">
              <div className="relative h-[10em] w-full overflow-hidden rounded-xl border">
                <Image
                  src={image}
                  alt={"image-" + { index }}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 space-y-2">
                <h1 className="font-bold text-primary">{name}</h1>
                <ul className="flex gap-1">
                  {stack.map((name, index) => (
                    <li key={index}>
                      <Badge>{name}</Badge>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm">{description}</p>
                <ChevronRight className="text-primary ml-auto mt-auto" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default SectionProjects;
