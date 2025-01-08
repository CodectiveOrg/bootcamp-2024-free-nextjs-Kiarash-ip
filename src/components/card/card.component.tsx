import { PropsWithChildren, ReactElement } from "react";

import styles from "./card.module.css";

export default function CardComponent({
  children,
}: PropsWithChildren): ReactElement {
  return <div className={styles.card}>{children}</div>;
}
