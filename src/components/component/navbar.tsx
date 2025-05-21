"use client";

import userExists from "@/hooks/is-user";
import { useUserStore } from "@/store/userStore";
import React, { useLayoutEffect } from "react";

export default function Navbar(): React.ReactNode {

  const email: string = "acecankill@gmail.com";

  const user = useUserStore();

  useLayoutEffect(() => {
    const checkUser = async () => {
      if (! (user.isInDB)) {
        await userExists({ email: email });
      }
    };

    checkUser();
  }, [user.isInDB]);

  return <div>Navbar</div>;
}
