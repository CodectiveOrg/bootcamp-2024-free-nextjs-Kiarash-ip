export type FiltersType = {
  q?: string;
  expertise?: string;
  gender?: string;
  degree?: string;
};

export enum GENDERS {
  male = "مرد",
  female = "زن",
}

export enum TURN_TYPES {
  "non-consult" = "حضوری",
  consult = "آنلاین",
}
