import { ReactElement } from "react";

import SearchLine from "@/icons/SearchLine";
import LocationLine from "@/icons/LocationLine";

import styles from "./search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <SearchLine />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <LocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
