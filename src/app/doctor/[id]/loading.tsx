import LoadingComponent from "@/components/loading/loading.component";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <LoadingComponent />
    </div>
  );
}
