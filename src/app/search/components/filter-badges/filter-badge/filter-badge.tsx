import React from "react";

import styles from "./filter-badge.module.css";
import { FilterBadge as FilterBadgeType } from "../filter-badges";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { CloseFill } from "@/icons/CloseFill";
import { useRouter } from "next/navigation";

export default function FilterBadge({
  id,
  label,
  Icon,
  onClick,
  filters,
}: FilterBadgeType & {
  id: string;
  onClick: (
    filter: Pick<FilterBadgeType, "title" | "filters"> & { key: string },
  ) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const value = searchParams.get(id);
  const isActive = value !== null;

  const removeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const params = new URLSearchParams(searchParams.toString());
    params.delete(id);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      className={clsx(styles.badge, {
        [styles.first]: id === "all",
        [styles.active]: isActive,
      })}
      style={{ order: !isActive && id !== "all" ? 1 : undefined }}
      onClick={() => onClick({ title: label, filters, key: id })}
    >
      {isActive ? (
        <>
          {value}
          <button className={styles.removeButton} onClick={removeHandler}>
            <CloseFill className={styles.removeIcon} />
          </button>
        </>
      ) : (
        <>
          {Icon ? <Icon className={styles.icon} /> : null} {label}
        </>
      )}
    </button>
  );
}
