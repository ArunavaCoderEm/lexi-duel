import { LetterBlockProps } from "@/types/type";
import React from "react";


export function LetterBlock({ letter, classname }: LetterBlockProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="40"
      height="40"
      fill="none"
      stroke="gold"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="60" height="60" rx="10" ry="10" />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="36"
        fontWeight="bold"
        stroke="gold"
        fill="none"
      >
        {letter}
      </text>
    </svg>
  );
}

