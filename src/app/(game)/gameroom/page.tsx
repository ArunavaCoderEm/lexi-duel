"use client";

import getword from "@/helper/givetheword";
import { useGameStore } from "@/store/game-store";
import React, { useEffect, useLayoutEffect, useState } from "react";

export default function GameRoom(): React.ReactNode {

  useLayoutEffect(() => {
    getword();
  }, []);

  const currentWord = useGameStore((state) => state.currentWord);
  const status = useGameStore((state) => state.status);

  useEffect(() => {
    if (status === "ready") {
      console.log("Current word updated:", currentWord);
    }
  }, [currentWord, status]);  


  return <div className="mt-20">{status === "ready" && currentWord}</div>;
}
