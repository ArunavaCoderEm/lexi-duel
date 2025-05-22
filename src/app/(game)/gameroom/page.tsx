"use client";

import useFetch from "@/hooks/use-fetch";
import React, { useEffect, useState } from "react";

export default function GameRoom(): React.ReactNode {
  const [word, setWord] = useState<string>("");

  const fetchWords = async () => {
    const res = await fetch(
      "https://cheaderthecoder.github.io/5-Letter-words/words.json"
    );
    return res.json(); 
  };

  const { loading, error, data, fn: getCustomWord } = useFetch(fetchWords);

  useEffect(() => {
    getCustomWord();
  }, [getCustomWord]);

  useEffect(() => {
    if (data?.words && Array.isArray(data.words)) {
      const wordInd: number = Math.floor(Math.random() * data.words.length);
      setWord(data.words[wordInd]?.toUpperCase());
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{word}</div>;
}
