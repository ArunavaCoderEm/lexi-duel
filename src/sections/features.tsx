import { cn } from "@/lib/utils";
import { classnameprop, featuresProps } from "@/types/type";
import Image from "next/image";
import React from "react";
import { featuresTop, featuresBottom } from "@/data/data";

export default function Features({
  classname,
}: classnameprop): React.ReactNode {
  return (
    <div className={cn("p-1", classname)}>
      <h1 className="text-center text-3xl font-semibold bg-gradient-to-b bg-clip-text text-transparent from-neutral-500 via-neutral-400 to-[#FCFCF7] tracking-tight">
        What you get
      </h1>

      <div className="flex flex-col gap-6 mt-6 p-3">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {featuresTop.map(
            ({ title, desc, img }: featuresProps, idx: number) => (
              <div
                key={idx}
                className="bg-[#1C1E1F] shadow-xl relative overflow-hidden p-5 pb-24  rounded-xl text-white"
              >
                <h1 className="text-lg font-semibold tracking-tight mb-1 z-10 relative">
                  {title}
                </h1>
                <p className="text-sm mt-4 bg-[#1C1E1F] text-neutral-300 tracking-tight z-10 relative">
                  {desc}
                </p>
                <Image
                  src={img}
                  width={400}
                  height={400}
                  alt={title}
                  className="absolute opacity-40 -bottom-4 w-40 h-40 -right-4 rounded-xl object-cover shadow-xl shadow-yellow-500/30 z-0"
                />
              </div>
            )
          )}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {featuresBottom.map(
            ({ title, desc, img }: featuresProps, idx: number) => (
              <div
                key={idx}
                className="bg-[#1C1E1F] shadow-xl p-5 pb-24 overflow-hidden relative rounded-xl text-white"
              >
                <h1 className="text-lg font-semibold tracking-tight mb-1 z-10 relative">
                  {title}
                </h1>
                <p className="text-sm mt-4 bg-[#1C1E1F] text-neutral-300 tracking-tight z-10 relative">
                  {desc}
                </p>
                <Image
                  src={img}
                  width={400}
                  height={400}
                  alt={title}
                  className="absolute opacity-40 -bottom-4 w-40 h-40 -right-4 rounded-xl object-cover shadow-xl shadow-yellow-500/30 z-0"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
