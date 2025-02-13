import { CommentModel } from "./comments.model";
import { DoctorModel } from "./doctor.model";

export type DetailedDoctorModel = DoctorModel & {
  experience: number;
  mcNumber: number;
  about: string;
  consultations: number;
  membershipDuration: string;
  price: number;
  phone: string;
  comments: CommentModel[];
};
