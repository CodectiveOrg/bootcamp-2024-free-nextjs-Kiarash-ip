"use client";

import React, { memo, useCallback } from "react";

import RadioFilterComponent from "../../radio-filter/radio-filter.component";

import { useSearchParams } from "next/navigation";

interface RadioFilterProps {
  title?: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (name: string, value: string) => void;
}

const RadioFilter = memo(
  ({ title, name, options, onChange }: RadioFilterProps) => {
    const searchParams = useSearchParams();
    const value = searchParams.get(name) || "";

    const changeHandler = useCallback(
      (value: string) => {
        onChange(name, value);
      },
      [name, onChange],
    );

    return (
      <RadioFilterComponent
        title={title}
        name={name}
        options={options}
        value={value}
        onChange={changeHandler}
      />
    );
  },
);

RadioFilter.displayName = "RadioFilter";

export default RadioFilter;
