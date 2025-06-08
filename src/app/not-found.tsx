"use client"

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

export default function NotFound() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-[75vh]">
      <h1 className="font-extrabold z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-neutral-300 to-[#FCFCF7] text-4xl md:text-6xl max-w-5xl md:leading-16 text-center">
        404
      </h1>
      <p className="text-neutral-400 mt-5">
        Looks like that word doesn’t exist in our dictionary. Try guessing
        again!
      </p>

      <Button onClick={() => redirect("/")} className="mt-4 cursor-pointer  flex items-center gap-1">
        <Home size={16} />
        Home
      </Button>
    </div>
  );
}
