"use client";

import { navbarItems } from "@/data/data";
import userExists from "@/hooks/is-user";
import { useUserStore } from "@/store/userStore";
import { navbarProps } from "@/types/type";
import React, { useLayoutEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Navbar(): React.ReactNode {
  const { user: cUser } = useUser();

  const [hov, setHov] = useState<number | null>(null);
  const [scroll, setScroll] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const user = useUserStore();

  useLayoutEffect(() => {
    const checkUser = async () => {
      if (cUser && !user.isInDB) {
        await userExists({
          email: cUser?.emailAddresses[0].emailAddress || "",
          firstName: cUser?.firstName || "",
          lastName: cUser?.lastName || "",
          avatar: cUser?.imageUrl || "",
        });
      }
    };

    checkUser();
  }, [user.isInDB, cUser]);

  return (
    <motion.nav
      animate={{ y: scroll ? 10 : 0, width: scroll ? "80%" : "100%" }}
      className={`flex items-center z-20 max-w-lg lg:max-w-6xl h-fit py-3 px-2 rounded-3xl mx-auto justify-between fixed inset-x-0 top-3 ${
        scroll ? "bg-[#151515]/90 backdrop-blur-sm" : "bg-transparent"
      } transition-colour duration-100`}
    >
      <Link
        href={"/"}
        className="relative flex cursor-pointer items-center gap-1 ml-1 md:ml-6"
      >
        <Image
          src={
            "https://static.vecteezy.com/system/resources/thumbnails/048/677/831/small/abstract-liquid-shape-organic-flat-blob-irregular-fluid-bubble-random-wavy-spots-and-curvy-element-amoeba-box-png.png"
          }
          className="objet-cover h-10 w-10 rounded-full "
          alt="Logo"
          width={200}
          height={200}
        />
        <p className="font-bold">LexiDuel</p>
      </Link>
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
              <span
                className={`relative z-10 transition-all duration-200 ${
                  hov === idx ? "text-[#151517]" : "text-[#FCFCF7]"
                }`}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
