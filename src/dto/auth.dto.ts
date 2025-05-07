import { Prisma } from "@/generated/client";

export type SignUpDto = Omit<Prisma.UserCreateInput, "id">;
export type SignInDto = Pick<Prisma.UserCreateInput, "username" | "password">;
