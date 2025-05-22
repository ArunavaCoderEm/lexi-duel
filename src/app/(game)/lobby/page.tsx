"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/store/userStore";
import { redirect } from "next/navigation";
import cuid from "cuid";
import React, { useLayoutEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Lobby() {
  const userdb = useUserStore.getState().isInDB;

  const [roomName, setRoomName] = useState("");
  const [code, setCode] = useState<string>("");

  const createGame = async () => {
    if (!roomName.trim()) {
      toast.error("Room name is required.");
      return;
    }
    const codeg = cuid();
    setCode(codeg);
    toast.success("Room created successfully!");
  };

  const copyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      toast.success("Code copied to clipboard!");
    }
  };

  useLayoutEffect(() => {
    if (!userdb) {
      redirect("/");
    }
  }, [userdb]);

  return (
    <Dialog>
      <div className="w-full bg-[#1B1B1B] min-h-96 p-6 gap-6 grid grid-cols-1 md:grid-cols-12 rounded-lg shadow-lg">
        <div className="bg-[#101010] relative overflow-hidden gap-6 flex flex-col items-center justify-center rounded-md md:col-span-5 w-full p-6 transition-all duration-300">
          <div className="absolute h-24 w-24 -right-5 -top-5 bg-yellow-500/60 rounded-full blur-2xl" />

          <h1 className="text-2xl font-semibold w-full text-left text-white">
            Jump into the Action
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <Button className="w-full cursor-pointer sm:w-auto">
              Play with Random Player
            </Button>
            <DialogTrigger asChild>
              <Button className="w-full cursor-pointer sm:w-auto">
                Host a Private Match
              </Button>
            </DialogTrigger>
          </div>

          <div className="text-neutral-400 uppercase text-sm tracking-wide">
            or
          </div>

          <div className="flex flex-col gap-3 w-full">
            <Input
              placeholder="Enter game code"
              className="w-full bg-[#1B1B1B] border border-gray-700 text-white"
            />
            <Button variant="outline" className="w-full cursor-pointer">
              Join Game
            </Button>
          </div>
        </div>

        <div className="md:col-span-7 rounded-md w-full flex items-center justify-center text-white text-xl font-light">
          Game previews, leaderboard, or match stats can go here!
        </div>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a private room</DialogTitle>
          <DialogDescription className="mt-1">
            Choose a room name and share the code with your friend.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col justify-center gap-3">
          <Label htmlFor="room-name">Room Name</Label>
          <Input
            id="room-name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Enter a room name"
            className="col-span-3"
          />
        </div>

        {code && (
          <div className="flex flex-col justify-center gap-3">
            <Label htmlFor="game-code">Game Code</Label>
            <div className="flex gap-2">
              <Input
                id="game-code"
                value={code}
                readOnly
                className="col-span-3"
              />
              <Button
                type="button"
                variant="secondary"
                onClick={copyCode}
                className="shrink-0"
              >
                Copy
              </Button>
            </div>
          </div>
        )}

        <DialogFooter>
          <Button
            disabled={code.length > 0}
            className="cursor-pointer"
            type="submit"
            onClick={createGame}
          >
            Create Game
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
