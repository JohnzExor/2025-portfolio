import Image from "next/image";
import profile from "/public/images/profile.jpeg";
import { Briefcase, Component, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { socials } from "./data";
import Link from "next/link";

const SectionHero = () => {
  return (
    <section
      id="home"
      className="col-span-2 space-y-2 md:space-y-0 md:grid grid-cols-3 gap-4"
    >
      <div className="col-span-2 space-y-2 md:space-y-4">
        <div className="col-span-2 bg-background/50 rounded-3xl border-background/20 p-2 md:p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
            <Component />
            <span>Introduction</span>
          </div>

          <div className="bg-background rounded-2xl p-4 md:p-10 space-y-4">
            <Badge>
              <Briefcase size={15} />
              <span>Open to work</span>
            </Badge>
            <h1 className="text-xl md:text-3xl">
              Hey, I&lsquo;m <br />
              <span className="font-bold text-5xl md:text-8xl text-primary">
                Johnzyll Jimeno,
              </span>
              <br />A Full Stack Web Developer
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              I care a lot about using design for positive impact, and enjoy
              creating user-centric, delightful, and human experiences.
            </p>
          </div>
        </div>
        <div className="bg-background/50 rounded-3xl border-background/20 p-2 md:p-4 space-y-2 md:space-y-4">
          <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
            <Link2 />
            <span>Links</span>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {socials.map(({ link, name, image, username }, index) => (
              <li key={index} className="bg-background py-2 px-3 rounded-2xl">
                <Link
                  target="_blank"
                  href={link}
                  className="relative flex items-center gap-2"
                >
                  <Image src={image} alt={name} width={40} height={40} />
                  <div className="-space-y-2">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <span className="text-muted-foreground text-sm">
                      {username}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-2 md:p-4 bg-background/50 backdrop-blur-lg rounded-3xl border-1 border-background/20">
        <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-full">
          <Image
            src={profile}
            alt="profile"
            placeholder="blur"
            fill
            className=" object-cover object-bottom hover:scale-110 duration-500 dark:brightness-75"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
