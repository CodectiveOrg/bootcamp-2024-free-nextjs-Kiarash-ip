import { ReactElement } from "react";

import Image from "next/image";

import CardComponent from "@/components/card/card.component";

import styles from "./abstract.module.css";
import { DetailedDoctorModel } from "@/models/doctor.detail.model";
import RatingComponent from "../rating/rating.component";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function AbstractComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.abstract}>
      <div className={styles.general}>
        <div className={styles.image}>
          <Image
            src={`https://cdn.paziresh24.com${doctor.image}`}
            alt="عکس پروفایل دکتر"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.name}>{doctor.name}</div>
        <div className={styles.experience}>{doctor.experience} سال تجربه</div>
        <div className={styles.mc}>شماره نظام پزشکی: {doctor.mcNumber}</div>
        <div className={styles.rating}>
          <RatingComponent
            average={doctor.averageRating}
            votes={doctor.totalVotes}
          />
        </div>
      </div>
      <div className={styles.badges}>
        {doctor.badges.map((badge) => (
          <div key={badge} className={styles.badge}>
            {badge}
          </div>
        ))}
      </div>
    </CardComponent>
  );
}
