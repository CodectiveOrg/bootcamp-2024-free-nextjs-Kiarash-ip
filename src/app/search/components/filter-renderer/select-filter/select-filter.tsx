import React from "react";

import styles from "./select-filter.module.css";

interface SelectFilterProps {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (name: string, value: string) => void;
}
export default function SelectFilter({
  name,
  options,
  onChange,
}: SelectFilterProps) {
  return (
    <ul className={styles["expertise-filter"]}>
      {options.map(({ value, label }) => (
        <li key={value}>
          <button type="button" onClick={() => onChange(name, value)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
