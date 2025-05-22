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


  return <div className="">{status === "ready" && currentWord}</div>;
}
