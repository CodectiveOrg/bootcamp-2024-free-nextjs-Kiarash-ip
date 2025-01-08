"use client";

import React, { useCallback } from "react";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import CardComponent from "@/components/card/card.component";

import { Filter } from "@/types/filter.type";

import styles from "./filter.module.css";

interface FilterComponentProps {
  filterKey: string;
  title: string;
  filters: Filter[];
}

export default function FilterComponent({
  title,
  filters,
  filterKey,
}: FilterComponentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = searchParams.get(filterKey) || "";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    router.push(pathname + "?" + createQueryString(filterKey, value));
  };

  return (
    <CardComponent>
      <div className={styles.filter}>
        <div className={styles.title}>{title}</div>
        <form className={styles.filters} onChange={(e) => {}}>
          {filters.map((filter) => (
            <label>
              <input
                type="radio"
                value={filter.value}
                name={filterKey}
                checked={value === filter.value}
                onChange={onChange}
              />
              <span>{filter.label}</span>
            </label>
          ))}
        </form>
      </div>
    </CardComponent>
  );
}
