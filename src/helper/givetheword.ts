import { useGameStore } from "@/store/game-store";
import axios from "axios";

export default async function getword() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-word`
    );
    const idx: number = Math.floor(Math.random() * 100);
    useGameStore.getState().setGame({
      status: "waiting",
      currentWord: res.data.data[idx].toUpperCase(),
    });
  } catch (e: unknown) {
    throw new Error("Error occured updating game state")
  } finally {
    useGameStore.getState().setGame({
      status: "ready",
    });
  }
}
