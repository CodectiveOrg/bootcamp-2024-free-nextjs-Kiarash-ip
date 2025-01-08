"use client";

import React from "react";

import styles from "./page.module.css";
import FilterComponent from "./components/filter/filter.component";
import ListComponent from "./components/list/list.component";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <FilterComponent
          title="جنسیت"
          filterKey="gender"
          filters={[
            {
              value: "male",
              label: "مرد",
            },
            {
              value: "female",
              label: "زن",
            },
          ]}
        />
        <FilterComponent
          title="خدمت"
          filterKey="turn_type"
          filters={[
            {
              value: "non-consult",
              label: "حضوری",
            },
            {
              value: "consult",
              label: "آنلاین",
            },
          ]}
        />
      </div>
      <ListComponent />
    </div>
  );
}
