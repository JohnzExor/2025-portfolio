import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import profile from "/public/images/profile.jpeg";

const page = async () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:grid grid-cols-5 gap-4 px-4 space-y-4 md:px-0 md:space-y-0">
        <div className="col-span-3 flex flex-col gap-8 p-10 md:p-20 relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg border border-white/20">
          <h1 className="text-5xl">
            Hey, I&lsquo;m{" "}
            <span className="font-bold text-5xl text-primary">
              Johnzyll Jimeno
            </span>
            , A Full Stack Web Developer
          </h1>
          <p>
            I care a lot about using design for positive impact, and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
          <div className="mt-auto">
            <Button>Contact me</Button>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden col-span-2 h-[300px] md:h-[600px]">
          <Image
            src={profile}
            alt="profile"
            placeholder="blur"
            fill
            className=" object-cover object-bottom hover:scale-110 duration-500"
          />
        </div>
      </div>
      <div className="p-10 md:p-20 rounded-3xl bg-white/80 backdrop-blur-lg border border-white/20">
        <h1 className="text-primary text-2xl font-bold">Tech Stack</h1>
      </div>
    </div>
  );
};

export default page;
