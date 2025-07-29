"use client";

import { testimonials } from "./data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa6";

const SectionTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="col-span-2 p-2 md:p-4 rounded-3xl border border-background/20 bg-background/10 space-y-2 md:space-y-4 shadow"
    >
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="mx-10"
      >
        <CarouselContent>
          {testimonials.map(({ description, name, date }, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-2/3 lg:basis-1/4 rounded-3xl"
            >
              <div
                key={index}
                className="bg-background p-4 rounded-2xl flex flex-col gap-2 h-full"
              >
                <FaQuoteLeft size={30} className="text-primary" />
                <p className="text-sm">{description}</p>

                <div className="mt-auto flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="-space-y-2">
                    <h1 className="font-bold text-primary">{name}</h1>
                    <span className="text-sm text-muted-foreground">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <ul className="grid grid-cols-4 gap-4">
        {testimonials.map(({ description, name, date }, index) => (
          <li
            key={index}
            className="bg-background p-4 rounded-2xl flex flex-col gap-2"
          >
            <Quote className="text-primary" />
            <p className="text-sm">{description}</p>

            <div className="mt-auto flex items-center gap-2">
              <Avatar>
                <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="-space-y-2">
                <h1 className="font-bold text-primary">{name}</h1>
                <span className="text-sm text-muted-foreground">{date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default SectionTestimonials;
