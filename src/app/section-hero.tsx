import Image from "next/image";
import profile from "/public/images/profile.jpeg";
import { Badge } from "@/components/ui/badge";
import { overviewStats, socials } from "./data";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaBriefcase, FaFeather, FaLink, FaUserPlus } from "react-icons/fa6";
import SectionContainer from "./section-container";

const SectionHero = () => {
  return (
    <section
      id="home"
      className="col-span-2 space-y-2 md:space-y-0 md:grid grid-cols-3 gap-3"
    >
      <div className="col-span-2 space-y-2 md:space-y-3">
        <SectionContainer
          id="introduction"
          name="Introduction"
          icon={FaFeather}
        >
          <div className="bg-background rounded-2xl p-4 md:p-10 space-y-4">
            <Badge>
              <FaBriefcase size={15} />
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
            <Link href={"#contact"} className={cn(buttonVariants())}>
              Hire me <FaUserPlus />
            </Link>
          </div>
        </SectionContainer>
        <SectionContainer icon={FaLink} id="links" name="Links">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {socials.map(({ link, name, icon: Icon, username }, index) => (
              <li key={index} className="bg-background py-2 px-3 rounded-2xl">
                <Link
                  target="_blank"
                  href={link}
                  className="relative flex items-center gap-2"
                >
                  <Icon size={20} className="text-primary mx-2" />
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
        </SectionContainer>
      </div>

      <div className="space-y-2 md:space-y-3 flex flex-col group">
        <div className="h-fit p-2 bg-background/50 backdrop-blur-lg rounded-3xl border-1 border-background/20">
          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-2">
            {overviewStats.map(
              ({ count, description, icon: Icon, name }, index) => (
                <li key={index} className="bg-background p-3 rounded-2xl">
                  <div className="flex items-center justify-between gap-2 pb-4 text-primary">
                    <Icon size={25} />
                    <span className="text-xl font-bold">{count}</span>
                  </div>
                  <h1 className="font-bold">{name}</h1>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="h-full p-2 bg-background backdrop-blur-lg rounded-3xl border-1 border-background/20">
          <div className="relative h-[300px] md:h-full">
            <Image
              src={profile}
              alt="profile"
              placeholder="blur"
              fill
              className=" object-cover object-bottom duration-500 dark:brightness-75 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
