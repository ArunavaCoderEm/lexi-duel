import { GameState } from '@/types/type';
import { create } from 'zustand';


export const useGameStore = create<GameState>((set) => ({
  currentWord: "",
  status: 'waiting',
  resetGame: () =>
    set({
      currentWord: '',
      status: 'waiting',
    }),
}));
