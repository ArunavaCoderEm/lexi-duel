import { Context } from "hono";
import prismaQuery from "../config/prisma.config";
import { userSchema } from "../schema/user.schema";
import { userCreate } from "../types/type";

export async function userRegisterHandler(c: Context) {
  try {
    const data = await c.req.json();
    const parsed = userSchema.safeParse(data);

    if (!parsed.success) {
      return c.json(
        {
          message: "User parsing error",
          success: false,
          error: parsed.error.flatten(),
        },
        400
      );
    }

    const userdata: userCreate = parsed.data;

    const userfound = await prismaQuery.user.findUnique({
      where: {
        email: userdata.email,
      },
    });

    if (userfound) {
      return c.json(
        {
          message: "User already exists",
          success: false,
          user: userfound,
        },
        409
      );
    }

    const usernew = await prismaQuery.user.create({
      data: userdata,
    });

    return c.json(
      {
        message: "User created",
        success: true,
        user: usernew,
      },
      201
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

export async function getUserHandler(c: Context) {
  try {
    
    const data = c.req.param();

    const parsed = userSchema.pick({ email: true }).safeParse(data);

    if (!parsed.success) {
      return c.json(
        {
          message: "User parsing error",
          success: false,
          error: parsed.error.flatten(),
        },
        400
      );
    }

    const user = prismaQuery.user.findUnique({
      where: {
        email: parsed.data.email,
      },
    });

    if (!user) {
      return c.json(
        {
          message: "No User Found",
          success: false,
          error: { user: null },
        },
        404
      );
    }

    return c.json(
      {
        message: "User found",
        success: true,
        user: user,
      },
      200
    );
  } catch (err: unknown) {
    return c.json(
      {
        message: "Internal server error",
        success: false,
        error: (err as Error).message,
      },
      500
    );
  }
}
