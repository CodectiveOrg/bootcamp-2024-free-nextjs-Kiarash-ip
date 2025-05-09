"use client";

import React, { SVGProps, useCallback, useState } from "react";

import { Drawer } from "@/components/drawer/drawer.component";
import FilterBadge from "./filter-badge/filter-badge";

import { Filter } from "@/types/filter.type";

import styles from "./filter-badges.module.css";
import FilterRenderer from "../filter-renderer/filter-renderer";
import { ButtonComponent } from "@/components/button/button.component";
import { usePathname, useRouter } from "next/navigation";
import BadgeList from "./badge-list/badge-list";

export interface FilterBadge {
  title: string;
  label: string;
  Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactNode) | null;
  filters: Filter[];
}

export default function FilterBadges() {
  const [currentFilters, setCurrentFilters] = useState<
    (Pick<FilterBadge, "title" | "filters"> & { key: string }) | null
  >(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleFilterClick = useCallback(
    (filter: Pick<FilterBadge, "title" | "filters"> & { key: string }) => {
      setCurrentFilters(filter);
    },
    [setCurrentFilters],
  );

  const handleRemoveAllFilters = useCallback(() => {
    router.push(pathname);
  }, [pathname, router]);

  const closeModalHandler = useCallback(() => {
    setCurrentFilters(null);
  }, [setCurrentFilters]);

  return (
    <>
      <BadgeList handleFilterClick={handleFilterClick} />
      <Drawer
        isOpen={!!currentFilters}
        onClose={closeModalHandler}
        title={currentFilters?.title}
        position={currentFilters?.key === "all" ? "left" : "bottom"}
      >
        {currentFilters ? (
          <FilterRenderer
            filters={
              currentFilters.filters.length > 1
                ? currentFilters.filters
                : currentFilters.filters.map(
                    /* eslint-disable @typescript-eslint/no-unused-vars */
                    ({ title, ...filter }) => filter,
                  )
            }
          />
        ) : null}
        {currentFilters?.key === "all" && (
          <div className={styles.actions}>
            <ButtonComponent
              size="large"
              variant="primary"
              shape="solid"
              onClick={closeModalHandler}
            >
              مشاهده نتایج
            </ButtonComponent>
            <ButtonComponent
              size="large"
              variant="primary"
              shape="outlined"
              onClick={() => {
                handleRemoveAllFilters();
                closeModalHandler();
              }}
            >
              حذف تمام فیلترها
            </ButtonComponent>
          </div>
        )}
      </Drawer>
    </>
  );
}
