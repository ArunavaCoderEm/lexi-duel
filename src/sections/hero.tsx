"use client";

import { Button } from "@/components/ui/button";
import { LetterBlock } from "@/icons/words";
import { classnameprop } from "@/types/type";
import React from "react";
import { motion } from "framer-motion";
import BackgroundDots from "@/components/component/bg-dots";

export default function Hero({ classname }: classnameprop): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`${classname} mx-auto relative overflow-hidden bg-[#1B1B1B] flex flex-col items-center justify-center rounded-lg`}
    >
      <BackgroundDots dotColor="yellow" gap={25} />

      <div className="absolute h-24 w-24 rounded-full blur-2xl animate-pulse bg-yellow-500/50 -left-5 -top-5" />
      <div className="absolute h-24 w-24 rounded-full blur-2xl animate-pulse bg-yellow-500/50 -right-5 -bottom-5" />
      <div className="absolute h-24 w-24 rounded-full blur-2xl animate-pulse bg-yellow-500/50 -right-5 -top-5" />
      <div className="absolute h-24 w-24 rounded-full blur-2xl animate-pulse bg-yellow-500/50 -left-5 -bottom-5" />

      <LetterBlock
        classname="md:opacity-30 opacity-0  absolute random-anim bottom-12 left-64"
        letter="W"
      />
      <LetterBlock classname="md:opacity-30 opacity-0 random-anim" letter="O" />
      <LetterBlock
        classname="absolute md:opacity-30 opacity-0 random-anim top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        letter="R"
      />
      <LetterBlock
        classname="absolute md:opacity-30 opacity-0 bottom-32 right-1/4 random-anim"
        letter="D"
      />
      <LetterBlock
        classname="absolute md:opacity-30 opacity-0 random-anim top-40 left-60"
        letter="L"
      />
      <LetterBlock
        classname="absolute md:opacity-30 opacity-0 random-anim left-0 bottom-0 left-1/2"
        letter="E"
      />

      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)", y: 2 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="font-extrabold mt-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-neutral-300 to-[#FCFCF7] text-4xl md:text-6xl max-w-5xl md:leading-16 text-center"
      >
        Guess
        <motion.span
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.8 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="font-normal"
        >
          {" "}
          Words.
        </motion.span>{" "}
        Outsmart
        <motion.span
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.8 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="font-normal"
        >
          {" "}
          Opponents.
        </motion.span>{" "}
        Win in
        <motion.span
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.8 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="font-normal"
        >
          {" "}
          Real Time.
        </motion.span>{" "}
        Level
        <motion.span
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.8 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="font-normal"
        >
          {" "}
          up.
        </motion.span>{" "}
      </motion.h1>
      <h3 className="mt-10 max-w-3xl text-center text-lg text-neutral-400 font-[400] tracking-tight">
        Play Wordle head-to-head. Real-time guessing, live scoreboard, and
        endless fun. It's the battle of minds, one word at a time.
      </h3>

      <div className="flex gap-3 my-10 items-center justify-center">
        <Button className="text-black cursor-pointer">Get Started</Button>
        <Button className="cursor-pointer" variant={"outline"}>
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}
