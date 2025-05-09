import { Filter } from "@/types/filter.type";

export const expertiseFilter: Filter = {
  name: "expertise",
  title: "تخصص ها",
  type: "select",
  options: [
    { label: "استخوان و مفاصل", value: "استخوان و مفاصل" },
    { label: "زنان، زایمان و نازایی", value: "زنان، زایمان و نازایی" },
    { label: "چشم پزشکی", value: "چشم پزشکی" },
    { label: "گوارش و معده", value: "گوارش و معده" },
    { label: "کلیه و مجاری ادراری", value: "کلیه و مجاری ادراری" },
    { label: "غدد و متابولیسم", value: "غدد و متابولیسم" },
    { label: "قلب و عروق", value: "قلب و عروق" },
    { label: "داخلی", value: "داخلی" },
    { label: "دهان و دندان", value: "دهان و دندان" },
    { label: "پوست و مو", value: "پوست و مو" },
    { label: "جراحی", value: "جراحی" },
    { label: "اطفال، کودکان و نوزادان", value: "اطفال، کودکان و نوزادان" },
    { label: "روانپزشکی", value: "روانپزشکی" },
    { label: "ریه و دستگاه تنفسی", value: "ریه و دستگاه تنفسی" },
    { label: "گوش، حلق و بینی", value: "گوش، حلق و بینی" },
    { label: "بیهوشی و مراقبت های ویژه", value: "بیهوشی و مراقبت های ویژه" },
    { label: "خون و سرطان", value: "خون و سرطان" },
    { label: "آزمایشگاه", value: "آزمایشگاه" },
    { label: "پزشک عمومی", value: "پزشک عمومی" },
    { label: "تغذیه", value: "تغذیه" },
    { label: "روانشناسی", value: "روانشناسی" },
    { label: "ژنتیک", value: "ژنتیک" },
    { label: "طب اورژانس", value: "طب اورژانس" },
    { label: "طب تسکینی و درد", value: "طب تسکینی و درد" },
    { label: "عفونی", value: "عفونی" },
    { label: "مغز و اعصاب", value: "مغز و اعصاب" },
    { label: "طب سنتی", value: "طب سنتی" },
    { label: "توانبخشی", value: "توانبخشی" },
    { label: "کرونا ویروس", value: "کرونا ویروس" },
    { label: "داروسازی", value: "داروسازی" },
    { label: "سلامت جنسی", value: "سلامت جنسی" },
    { label: "زیبایی", value: "زیبایی" },
    { label: "آلرژی", value: "آلرژی" },
    { label: "دیابت", value: "دیابت" },
    { label: "تصویربرداری", value: "تصویربرداری" },
  ],
};

export const genderFilter: Filter = {
  name: "gender",
  title: "جنسیت پزشک",
  type: "radio",
  options: [
    { value: "آقا", label: "آقا" },
    { value: "خانم", label: "خانم" },
  ],
};

export const degreeFilter: Filter = {
  name: "degree",
  title: "درجه علمی",
  type: "radio",
  options: [
    { value: "فلوشیپ", label: "فلوشیپ" },
    { value: "فوق تخصص", label: "فوق تخصص" },
    { value: "دکترای تخصصی", label: "دکترای تخصصی" },
    { value: "متخصص", label: "متخصص" },
    { value: "دکتری", label: "دکتری" },
    { value: "کارشناس ارشد", label: "کارشناس ارشد" },
    { value: "کارشناس", label: "کارشناس" },
  ],
};
