import { ReactElement } from "react";

import SearchBoxComponent from "@/components/search-box/search-box.component";

import MyDoctorLogo from "@/logo/my-doctor.logo";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        دکتر من
      </h1>
      <SearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
