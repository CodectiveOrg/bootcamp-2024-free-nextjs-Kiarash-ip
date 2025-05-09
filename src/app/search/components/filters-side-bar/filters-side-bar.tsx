"use client";

import React from "react";
import FiltersSummaryComponent from "../filters-summary/filters-summary.component";
import CardComponent from "@/components/card/card.component";
import FilterRenderer from "../filter-renderer/filter-renderer";
import { degreeFilter, expertiseFilter, genderFilter } from "@/mock/filters";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function FiltersSideBar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    isDesktop && (
      <>
        <FiltersSummaryComponent />
        <CardComponent>
          <FilterRenderer key="desktop" filters={[expertiseFilter]} />
        </CardComponent>
        <CardComponent>
          <FilterRenderer
            key="desktop"
            filters={[genderFilter, degreeFilter]}
          />
        </CardComponent>
      </>
    )
  );
}
