"use client";

import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./expertise-filter.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/utils/utils";

const options: string[] = [
  "استخوان و مفاصل",
  "زنان، زایمان و نازایی",
  "چشم پزشکی",
  "گوارش و معده",
  "کلیه و مجاری ادراری",
  "غدد و متابولیسم",
  "قلب و عروق",
  "داخلی",
  "دهان و دندان",
  "پوست و مو",
  "جراحی",
  "اطفال، کودکان و نوزادان",
  "روانپزشکی",
  "ریه و دستگاه تنفسی",
  "گوش، حلق و بینی",
  "بیهوشی و مراقبت های ویژه",
  "خون و سرطان",
  "آزمایشگاه",
  "پزشک عمومی",
  "تغذیه",
  "روانشناسی",
  "ژنتیک",
  "طب اورژانس",
  "طب تسکینی و درد",
  "عفونی",
  "مغز و اعصاب",
  "طب سنتی",
  "توانبخشی",
  "کرونا ویروس",
  "داروسازی",
  "سلامت جنسی",
  "زیبایی",
  "آلرژی",
  "دیابت",
  "تصویربرداری",
];

export default function ExpertiseFilterComponent(): ReactElement {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const buttonClickHandler = (value: string): void => {
    router.push(
      pathname + `?${createQueryString(searchParams, "expertise", value)}`,
    );
  };

  return (
    <CardComponent>
      <ul className={styles["expertise-filter"]}>
        {options.map((x) => (
          <li key={x}>
            <button type="button" onClick={() => buttonClickHandler(x)}>
              {x}
            </button>
          </li>
        ))}
      </ul>
    </CardComponent>
  );
}
