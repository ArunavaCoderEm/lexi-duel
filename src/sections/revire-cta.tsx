import { cn } from "@/lib/utils";
import { classnameprop, Testimonial } from "@/types/type";
import React from "react";
import Marquee from "react-fast-marquee";
import { testimonials } from "@/data/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ReviewnCta({
  classname,
}: classnameprop): React.ReactNode {
  return (
    <div className={cn("p-1 rounded-xl", classname)}>
      <h1 className="text-center text-3xl font-semibold bg-gradient-to-b bg-clip-text text-transparent from-neutral-500 via-neutral-400 to-[#FCFCF7] tracking-tight">
        Why others love us
      </h1>
      <Marquee pauseOnHover={true} className="h-full w-full">
        {testimonials.map((item: Testimonial, idx: number) => {
          return <Testimonialcard key={idx} {...item} />;
        })}
      </Marquee>
      <Cta />
    </div>
  );
}

export function Testimonialcard({
  quote,
  name,
  image,
}: Testimonial): React.ReactNode {
  return (
    <div className="flex flex-col items-center gap-4">
      <Card className="w-[350px] h-64  mt-10 mx-3 shadow-md shadow-neutral-700/20 border border-neutral-800 bg-[#1C1E1F] text-white">
        <CardHeader className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full w-24 h-24 object-cover border border-neutral-700"
          />
          <div>
            <CardTitle className="text-lg tracking-tight">{name}</CardTitle>
            <CardDescription className="text-neutral-400 text-sm">
              Verified User
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-300 leading-relaxed">{quote}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function Cta(): React.ReactNode {
  return (
    <div className="bg-[#1C1E1F] relative overflow-hidden mt-5 rounded-xl w-full flex flex-col md:flex-row items-center justify-between px-6 py-8 h-48">
        <div className="absolute opacity-40 -bottom-4 w-40 h-40 -right-4 rounded-full bg-yellow-500/30 blur-2xl"/>
        <div className="absolute opacity-40 -top-4 w-40 h-40 -left-4 rounded-full bg-yellow-500/30 blur-2xl"/>
      <div className="text-[#FCFCF7] max-w-lg mb-4 md:mb-0">
        <h2 className="text-3xl font-semibold tracking-tight">
          Ready to level up your game ?
        </h2>
        <p className="mt-2 text-neutral-400 text-lg tracking-tight">
          Join thousands of players and start playing now with real-time
          multiplayer features.
        </p>
      </div>
      <Button className="bg-yellow-500 text-black hover:bg-yellow-600 cursor-pointer animate-bounce shadow-lg">
        Get Started
      </Button>
    </div>
  );
}
