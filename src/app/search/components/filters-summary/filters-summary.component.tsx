"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ReactElement, useCallback, useMemo } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./filters-summary.module.css";
import { deleteQueryString } from "@/utils/utils";

export default function FiltersSummaryComponent(): ReactElement | null {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const expertise = searchParams.get("expertise") || "";
  const gender = searchParams.get("gender") || "";
  const degree = searchParams.get("degree") || "";

  const isEmpty = useMemo(() => {
    return !q && !expertise && !gender && !degree;
  }, [q, expertise, gender, degree]);

  const removeAllButtonClickHandler = () => {
    router.push(pathname);
  };

  const filterClickHandler = useCallback(
    (name: string) => {
      router.push(pathname + `?${deleteQueryString(searchParams, name)}`);
    },
    [pathname, searchParams, router],
  );

  if (isEmpty) {
    return null;
  }

  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده</div>

        <button type="button" onClick={removeAllButtonClickHandler}>
          حذف همه
        </button>

        <ul className={styles.filters}>
          {q && <li onClick={() => filterClickHandler("q")}>{q}</li>}
          {expertise && (
            <li onClick={() => filterClickHandler("expertise")}>{expertise}</li>
          )}
          {gender && (
            <li onClick={() => filterClickHandler("gender")}>{gender}</li>
          )}
          {degree && (
            <li onClick={() => filterClickHandler("degree")}>{degree}</li>
          )}
        </ul>
      </div>
    </CardComponent>
  );
}
