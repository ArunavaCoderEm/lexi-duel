"use server"

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const res = await axios.get("https://cheaderthecoder.github.io/5-Letter-words/words.json");
    console.log(res.data)
    return NextResponse.json({
      message: "Word found",
      success: true,
      data: res.data.words,
    }, {status: 200});

  } catch (e: unknown) {
    return NextResponse.json({
      message: "Internal server error",
      success: false,
      error: e,
    }, {status: 500});
  }
}
