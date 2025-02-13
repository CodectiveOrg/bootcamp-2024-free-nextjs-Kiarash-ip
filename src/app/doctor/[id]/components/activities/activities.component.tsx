import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import Message4Line from "@/icons/Message4Line";
import CalendarMonthLine from "@/icons/CalendarMonthLine";

import { DetailedDoctorModel } from "@/models/doctor.detail.model";

import styles from "./activities.module.css";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function ActivitiesComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.activities} title="فعالیت‌ها">
      <div className={styles.activity}>
        <Message4Line />
        <p>
          <span className={styles.highlight}>{doctor.consultations}</span>{" "}
          مشاوره فعال
        </p>
      </div>
      <div className={styles.activity}>
        <CalendarMonthLine /> دکتر من بیش از{" "}
        <p>
          <span className={styles.highlight}>{doctor.membershipDuration}</span>{" "}
          افتخار میزبانی از صفحه اختصاصی {doctor.name} را داشته است.
        </p>
      </div>
    </CardComponent>
  );
}
