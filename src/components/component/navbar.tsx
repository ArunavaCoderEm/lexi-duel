"use client";

import { navbarItems } from "@/data/data";
import userExists from "@/hooks/is-user";
import { useUserStore } from "@/store/userStore";
import { navbarProps } from "@/types/type";
import React, { useLayoutEffect, useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar(): React.ReactNode {
  const email: string = "acecankill@gmail.com";

  const [hov, setHov] = useState<number | null>(null);
  const [scroll, setScroll] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    console.log(latest)
    if (latest > 20) {
      setScroll(true);
    } else {
      setScroll(false)
    }
  });

  const user = useUserStore();

  useLayoutEffect(() => {
    const checkUser = async () => {
      if (!user.isInDB) {
        await userExists({ email: email });
      }
    };

    checkUser();
  }, [user.isInDB]);

  return (
    <motion.nav
      animate={{ y: scroll ? 10 : 0, width: scroll ? "80%" : "100%" }}
      className={`flex items-center z-20 max-w-lg lg:max-w-6xl h-fit py-3 px-2 rounded-3xl mx-auto justify-between fixed inset-x-0 top-3 ${scroll ? "bg-[#151517]/90 backdrop-blur-sm" : "bg-transparent"} transition-colour duration-100`}
    >
      <div className="relative flex items-center gap-1 ml-1 md:ml-6">
        <img
          src={
            "https://static.vecteezy.com/system/resources/thumbnails/048/677/831/small/abstract-liquid-shape-organic-flat-blob-irregular-fluid-bubble-random-wavy-spots-and-curvy-element-amoeba-box-png.png"
          }
          className="objet-cover h-10 w-10 rounded-full "
          alt="Logo"
        />
        <p className="font-bold">LexiDuel</p>
      </div>
      <div className="flex gap-3 items-center lg:mr-6">
        {navbarItems.map((item: navbarProps, idx: number) => {
          return (
            <Link
              key={idx}
              className="text-sm relative px-2 py-1"
              href={`/${item.slug}`}
              onMouseEnter={() => setHov(idx)}
              onMouseLeave={() => setHov(null)}
            >
              {hov === idx && (
                <motion.span
                  layoutId="nav-item"
                  className={`h-full transition-all duration-200 w-full absolute inset-0 rounded-md bg-yellow-400/60`}
                />
              )}
              <span className={`relative z-10 transition-all duration-200 ${hov === idx ? "text-[#151517]" : "text-[#FCFCF7]"}`}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
