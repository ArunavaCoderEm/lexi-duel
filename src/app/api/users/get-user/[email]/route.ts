"use server"

import prismaQuery from "@/config/prisma.config";
import { userSchema } from "@/schema/user.schema";
import { userCreate } from "@/types/type";
import { NextResponse } from "next/server";

type UserWithEmail = Omit<userCreate, "firstName" | "lastName" | "avatar">;

export async function GET(req: Request, { params }: { params: UserWithEmail }) {
  const data = await params; 

  const parsed = userSchema.pick({ email: true }).safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "User parsing error",
        success: false,
        error: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  try {
    const userf = await prismaQuery.user.findUnique({
      where: {
        email: parsed.data.email,
      },
    });

    if (userf) {
      return NextResponse.json({
        message: "User found",
        success: true,
        user: userf,
      });
    } else {
      return NextResponse.json({
        message: "User not found",
        success: false,
        user: null,
      });
    }
  } catch (e: unknown) {
    return NextResponse.json({
      message: "Internal server error",
      success: false,
      error: e,
    }, {status: 500});
  }
}
