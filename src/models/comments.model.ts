import { UserModel } from "./user.model";

export type CommentModel = {
  id: string;
  user: UserModel;
  date: Date;
  rating: number;
  text: string;
};
