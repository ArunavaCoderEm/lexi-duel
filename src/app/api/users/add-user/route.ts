import prismaQuery from "@/config/prisma.config";
import { userSchema } from "@/schema/user.schema";
import { userCreate } from "@/types/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();;
  const parsed = userSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json({
      message: "User parsing error",
      success: false,
      error: parsed.error.flatten(),
    });
  }

  const userdata: userCreate | null = parsed.data;

  try {
    const userfound = await prismaQuery.user.findUnique({
      where: {
        email: userdata.email,
      },
    });

    if (userfound) {
      return NextResponse.json({
        message: "User already there",
        success: false,
        user: userfound,
      });
    } else {
      const usernew = await prismaQuery.user.create({
        data: {
          ...userdata,
        },
      });
      return NextResponse.json({
        message: "User created",
        success: true,
        user: usernew,
      });
    }
  } catch (e: unknown) {
    return NextResponse.json({
      message: "Internal server error",
      success: false,
      error: e,
    });
  }
}
