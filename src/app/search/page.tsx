import React from "react";

import styles from "./page.module.css";
import FilterComponent from "./components/filter/filter.component";
import ListComponent from "./components/list/list.component";
import { GENDERS, TURN_TYPES } from "./types/filter";
import BadgeListComponent from "./components/badge-list/badge-list.component";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <BadgeListComponent />
        <FilterComponent
          title="جنسیت"
          filterKey="gender"
          filters={Object.entries(GENDERS).map((filter) => ({
            label: filter[1],
            value: filter[0],
          }))}
        />
        <FilterComponent
          title="خدمت"
          filterKey="turn_type"
          filters={Object.entries(TURN_TYPES).map((filter) => ({
            label: filter[1],
            value: filter[0],
          }))}
        />
      </div>
      <ListComponent />
    </div>
  );
}