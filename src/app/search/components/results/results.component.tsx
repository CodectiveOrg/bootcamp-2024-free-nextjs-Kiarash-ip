"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";

import Link from "next/link";

import StarFill from "@/icons/StarFill";
import LocationLine from "@/icons/LocationLine";

import styles from "./results.module.css";
import { DoctorModel } from "@/models/doctor.model";
import { useSearchParams } from "next/navigation";
import { doctors } from "@/mock/doctors";
import Image from "next/image";

export default function ResultsComponent(): ReactElement {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const expertise = searchParams.get("expertise") || "";
  const gender = searchParams.get("gender") || "";
  const degree = searchParams.get("degree") || "";
  const [filteredDoctors, setFilteredDoctors] = useState<DoctorModel[]>([]);

  const isVisible = useCallback(
    (doctor: DoctorModel): boolean => {
      return (
        doesDoctorInclude(doctor, q) &&
        doesInclude(doctor.expertise, expertise) &&
        doesInclude(doctor.gender, gender) &&
        doesInclude(doctor.degree, degree)
      );
    },
    [q, expertise, gender, degree],
  );

  useEffect(() => {
    setFilteredDoctors(doctors.filter(isVisible));
  }, [isVisible]);

  return (
    <ul className={styles.results}>
      {filteredDoctors.map((doctor) => (
        <li key={doctor.id}>
          <div className={styles.header}>
            <div className={styles.image}>
              <Image
                src={`https://cdn.paziresh24.com${doctor.image}`}
                alt="عکس پروفایل دکتر"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.name}>{doctor.name}</div>
            <div className={styles.brief}>{doctor.brief}</div>
            <div className={styles.badges}>
              {doctor.badges.map((badge) => (
                <div key={badge} className={styles.badge}>
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.address}>
            <LocationLine /> آدرس: {doctor.address}
          </div>
          <div className={styles.actions}>
            <div className={styles.rating}>
              <StarFill className={styles.icon} />{" "}
              <span className={styles["average-rating"]}>
                {Math.floor(doctor.averageRating * 10) / 10}
              </span>{" "}
              <span className={styles["total-votes"]}>
                ({doctor.totalVotes} نظر)
              </span>
            </div>
            <div className={styles.caption}>
              اولین نوبت: {doctor.firstAvailableAppointment}
            </div>
            <Link href={`/doctor/${doctor.id}`}>نوبت‌دهی آنلاین</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

function doesDoctorInclude(doctor: DoctorModel, query?: string): boolean {
  if (!query) {
    return true;
  }

  return doesSomeInclude([doctor.name, doctor.brief, doctor.address], query);
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }

  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item: string, query?: string): boolean {
  if (!query) {
    return true;
  }

  return item.toLowerCase().includes(query.toLowerCase());
}
