"use client";

import React, { useCallback } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./badge-list.module.css";
import { GENDERS, TURN_TYPES } from "../../types/filter";
import { CloseFill } from "@/icons/CloseFill";

export default function BadgeListComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const gender = searchParams.get("gender") as keyof typeof GENDERS;
  const turn_type = searchParams.get("turn_type") as keyof typeof TURN_TYPES;

  const deleteQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      return params.toString();
    },
    [searchParams],
  );

  const deleteHandler = (key: string) => {
    router.push(pathname + "?" + deleteQueryString(key));
  };

  if (!gender && !turn_type) return <></>;

  return (
    <div className={styles.list}>
      {gender && (
        <button className={styles.item} onClick={() => deleteHandler("gender")}>
          <span>{GENDERS[gender]}</span>
          <CloseFill />
        </button>
      )}
      {turn_type && (
        <button
          className={styles.item}
          onClick={() => deleteHandler("turn_type")}
        >
          <span>{TURN_TYPES[turn_type]}</span>
          <CloseFill />
        </button>
      )}
    </div>
  );
}
