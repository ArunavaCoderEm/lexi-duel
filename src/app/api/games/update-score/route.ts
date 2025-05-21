import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  console.log(req.body);
  return NextResponse.json({ message: "PUT request received" });
}
