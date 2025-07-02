import axios from "axios";
import { Context } from "hono";

export async function wordFetch(c: Context) {
  try {
    const resp = await axios.get(
      "https://cheaderthecoder.github.io/5-Letter-words/words.json"
    );

    const data = resp.data.words;
    const idx: number = Math.floor(Math.random() * 100);
    const word = data[idx];

    return c.json(
      {
        message: "Word found",
        success: true,
        data: word,
      },
      200
    );
  } catch (e: unknown) {
    return c.json(
      {
        message: "Internal server error",
        success: false,
        error: (e as Error).message,
      },
      500
    );
  }
}
