import React from "react";

import styles from "./rating.module.css";

type Props = {
  average: number;
  votes: number;
};

export default function RatingComponent({ average, votes }: Props) {
  return (
    <div className={styles.rating}>
      <span className={styles["average-rating"]}>
        {Math.floor(average * 10) / 10} از 5
      </span>
      <span>رضایت ({votes.toLocaleString()} نظر)</span>
    </div>
  );
}
