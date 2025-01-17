"use client";

import { ReactElement } from "react";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/utils/utils";

export default function GenderFilterComponent(): ReactElement {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender") || "";

  const changeHandler = (value: string): void => {
    router.push(
      pathname + `?${createQueryString(searchParams, "gender", value)}`,
    );
  };

  return (
    <RadioFilterComponent
      title="جنسیت پزشک"
      name="gender"
      options={[
        { value: "آقا", label: "آقا" },
        { value: "خانم", label: "خانم" },
      ]}
      value={gender}
      onChange={changeHandler}
    />
  );
}
