import React, { Suspense } from "react";

import SearchBoxComponent from "@/components/search-box/search-box.component";
import FiltersSummaryComponent from "./components/filters-summary/filters-summary.component";
import ExpertiseFilterComponent from "./components/expertise-filter/expertise-filter.component";
import GenderFilterComponent from "./components/gender-filter/gender-filter.component";
import DegreeFilterComponent from "./components/degree-filter/degree-filter.component";
import SortComponent from "./components/sort/sort.component";
import AppointmentFilterComponent from "./components/appointment-filter/appointment-filter.component";
import ResultsComponent from "./components/results/results.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.search}>
        <Suspense>
          <SearchBoxComponent />
        </Suspense>
      </div>
      <div className={styles.filters}>
        <Suspense>
          <FiltersSummaryComponent />
          <ExpertiseFilterComponent />
          <GenderFilterComponent />
          <DegreeFilterComponent />
        </Suspense>
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
