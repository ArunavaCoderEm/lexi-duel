import { Button } from "@/components/ui/button";
import { classnameprop } from "@/types/type";
import React from "react";

export default function Hero({ classname }: classnameprop): React.ReactNode {
  return (
    <div
      className={`${classname} mx-auto relative overflow-hidden bg-[#1B1B1B] flex flex-col items-center justify-center rounded-lg flex`}
    >

      <div className="absolute h-24 w-24 rounded-full bg-yellow-500 -left-5 -top-5" />
      <div className="absolute h-24 w-24 rounded-full bg-yellow-500 -right-5 -bottom-5" />
      <div className="absolute h-24 w-24 rounded-full bg-yellow-500 -right-5 -top-5" />
      <div className="absolute h-24 w-24 rounded-full bg-yellow-500 -left-5 -bottom-5" />
      <h1 className="font-extrabold mt-10 text-4xl md:text-6xl max-w-5xl md:leading-16 text-center">
        Guess<span className="font-normal"> Words.</span> Outsmart
        <span className="font-normal"> Opponents.</span> Win in
        <span className="font-normal"> Real Time.</span> Level
        <span className="font-normal"> up</span>{" "}
      </h1>
      <h3 className="mt-10 max-w-3xl text-center text-lg text-neutral-400 font-[400] tracking-tight">
        Play Wordle head-to-head. Real-time guessing, live scoreboard, and
        endless fun. It's the battle of minds, one word at a time.
      </h3>

      <div className="flex gap-3 my-10 items-center justify-center">
        <Button className="text-black cursor-pointer">Get Started</Button>
        <Button className="cursor-pointer" variant={"outline"}>Learn More</Button>
      </div>
    </div>
  );
}
