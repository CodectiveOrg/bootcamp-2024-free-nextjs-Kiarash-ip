import React, { Suspense } from "react";

import SearchBoxComponent from "@/components/search-box/search-box.component";
import SortComponent from "./components/sort/sort.component";
import AppointmentFilterComponent from "./components/appointment-filter/appointment-filter.component";
import ResultsComponent from "./components/results/results.component";
import FilterBadges from "./components/filter-badges/filter-badges";
import FiltersSideBar from "./components/filters-side-bar/filters-side-bar";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <Suspense>
            <SearchBoxComponent />
          </Suspense>
        </div>
        <FilterBadges />
      </div>
      <div className={styles.filters}>
        <FiltersSideBar />
      </div>
      <div className={styles.toolbar}>
        <SortComponent />
        <AppointmentFilterComponent />
      </div>
      <div className={styles.results}>
        <Suspense>
          <ResultsComponent />
        </Suspense>
      </div>
    </div>
  );
}
