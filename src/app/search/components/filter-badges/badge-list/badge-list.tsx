import React from "react";

import { degreeFilter, expertiseFilter, genderFilter } from "@/mock/filters";

import { FilterBadge as FilterBadgeType } from "../filter-badges";

import FilterLine from "@/icons/FilterLine";

import styles from "./badge-list.module.css";
import FilterBadge from "../filter-badge/filter-badge";

const filterBadges: Record<string, FilterBadgeType> = {
  all: {
    title: "فیلترها",
    label: "فیلترها",
    Icon: FilterLine,
    filters: [expertiseFilter, genderFilter, degreeFilter],
  },
  expertise: {
    title: expertiseFilter.title,
    label: "انتخاب تخصص",
    Icon: null,
    filters: [expertiseFilter],
  },
  gender: {
    title: genderFilter.title,
    label: "جنسیت",
    Icon: null,
    filters: [genderFilter],
  },
  degree: {
    title: degreeFilter.title,
    label: "میزان تخصص",
    Icon: null,
    filters: [degreeFilter],
  },
};

interface BadgeListProps {
  handleFilterClick: (
    filter: Pick<FilterBadgeType, "title" | "filters"> & { key: string },
  ) => void;
}

export default function BadgeList({ handleFilterClick }: BadgeListProps) {
  return (
    <div className={styles.filterBadges}>
      {Object.entries(filterBadges).map((filter) => {
        return (
          <FilterBadge
            key={filter[0]}
            id={filter[0]}
            {...filter[1]}
            onClick={handleFilterClick}
          />
        );
      })}
    </div>
  );
}
