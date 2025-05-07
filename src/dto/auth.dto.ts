import Prisma from "@prisma/client";

// @ts-ignore
export type SignUpDto = Omit<Prisma.User, "id">;
// @ts-ignore
export type SignInDto = Pick<Prisma.User, "username" | "password">;
