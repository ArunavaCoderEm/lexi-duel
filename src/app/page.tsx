import { Button } from "@/components/ui/button";
import Home from "@/pages/home";
import React from "react";

export default function MainApp(): React.ReactNode {
  return (
    <div className="p-1 flex flex-col items-center justify-center min-h-[100vh]">
      <Home />
      <Button className="cursor-pointer font-bold">Hello</Button>
    </div>
  );
}
