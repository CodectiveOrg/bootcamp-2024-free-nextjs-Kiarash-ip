import { ReactElement } from "react";
import styles from "./spinner.module.css";
import clsx from "clsx";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function SpinnerComponent({
  size = "medium",
  className,
}: SpinnerProps): ReactElement {
  return (
    <div
      className={clsx(styles.spinner, styles[size], className)}
      role="status"
      aria-label="Loading"
    >
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
}
