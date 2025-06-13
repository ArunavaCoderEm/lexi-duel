import { GameState } from "@/types/type";
import { create } from "zustand";

export const useGameStore = create<GameState>((set) => ({
  currentWord: "",
  status: "waiting",
  setGame: (game) => set((state) => ({ ...state, ...game })),
  resetGame: () =>
    set({
      currentWord: "",
      status: "waiting",
    }),
}));
