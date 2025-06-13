import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  avatar: z.string().url("Invalid avatar URL").optional(),
});
