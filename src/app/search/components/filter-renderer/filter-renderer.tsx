"use client";

import React, { useCallback } from "react";
import SelectFilter from "./select-filter/select-filter";
import RadioFilter from "./radio-filter/radio-filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./filter-renderer.module.css";

export interface Filter {
  name: string;
  title?: string;
  type: "radio" | "select";
  options: {
    value: string;
    label: string;
  }[];
}

interface FilterRendererProps {
  filters: Filter[];
}

export default function FilterRenderer({ filters }: FilterRendererProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeHandler = useCallback(
    (name: string, value: string): void => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router],
  );

  const renderFilter = useCallback(
    (filter: Filter) => {
      const commonProps = {
        key: filter.name,
        onChange: changeHandler,
        name: filter.name,
        options: filter.options,
      };

      switch (filter.type) {
        case "radio":
          return <RadioFilter {...commonProps} title={filter.title} />;
        case "select":
          return <SelectFilter {...commonProps} />;
        default:
          return null;
      }
    },
    [changeHandler],
  );

  return (
    <div className={styles.filterRenderer}>{filters.map(renderFilter)}</div>
  );
}
