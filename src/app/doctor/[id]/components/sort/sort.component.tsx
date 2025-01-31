"use client";

import { Dispatch, ReactElement, SetStateAction } from "react";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

type Props = {
  options: SelectOptionType[];
  selectedOption: SelectOptionType;
  setSelectedOption: Dispatch<SetStateAction<SelectOptionType>>;
};

export default function SortComponent({
  options,
  selectedOption,
  setSelectedOption,
}: Props): ReactElement {
  return (
    <SelectComponent
      floating
      title="مرتب‌سازی"
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={setSelectedOption}
    />
  );
}
