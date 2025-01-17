"use client";

import { ReactElement } from "react";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/utils/utils";

export default function DegreeFilterComponent(): ReactElement {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const degree = searchParams.get("gender") || "";

  const changeHandler = (value: string): void => {
    router.push(
      pathname + `?${createQueryString(searchParams, "degree", value)}`,
    );
  };

  return (
    <RadioFilterComponent
      title="درجه علمی"
      name="degree"
      options={[
        { value: "فلوشیپ", label: "فلوشیپ" },
        { value: "فوق تخصص", label: "فوق تخصص" },
        { value: "دکترای تخصصی", label: "دکترای تخصصی" },
        { value: "متخصص", label: "متخصص" },
        { value: "دکتری", label: "دکتری" },
        { value: "کارشناس ارشد", label: "کارشناس ارشد" },
        { value: "کارشناس", label: "کارشناس" },
      ]}
      value={degree}
      onChange={changeHandler}
    />
  );
}
