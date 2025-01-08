import styles from "./item.module.css";

interface ItemComponentProps {
  fullname: string;
}

export default function ItemComponent({ fullname }: ItemComponentProps) {
  return <li className={styles.item}>{fullname}</li>;
}
