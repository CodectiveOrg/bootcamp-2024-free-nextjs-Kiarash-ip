import React from "react";

import styles from "./progress.module.css";

type Props = {
  label: string;
  average: number;
};

export default function ProgressComponent({ label, average }: Props) {
  return (
    <div className={styles.progress}>
      <label>{label}</label>
      <div className={styles["progress-wrapper"]}>
        <progress value={(average / 5) * 100} max="100" />
        <span>{average.toFixed(1)}</span>
      </div>
    </div>
  );
}
