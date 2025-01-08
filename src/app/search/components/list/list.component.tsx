"use client";

import React from "react";

import styles from "./list.module.css";
import { useSearchParams } from "next/navigation";
import ItemComponent from "../item/item.component";

interface Doctor {
  id: number;
  fullname: string;
  gender: string;
  turn_type: string;
}

const doctors: Doctor[] = [
  {
    id: 0,
    fullname: "عرفان اشجعي",
    gender: "male",
    turn_type: "non-consult",
  },
  {
    id: 1,
    fullname: "فرح ناز رشیدی",
    gender: "female",
    turn_type: "consult",
  },
  {
    id: 2,
    fullname: "خدیجه حسنلو",
    gender: "female",
    turn_type: "non-consult",
  },
  {
    id: 3,
    fullname: "مرضیه موسوی",
    gender: "female",
    turn_type: "non-consult",
  },
  {
    id: 4,
    fullname: "عرفان اشجعي",
    gender: "male",
    turn_type: "non-consult",
  },
  {
    id: 5,
    fullname: "محمدجواد طاهری",
    gender: "male",
    turn_type: "consult",
  },
  {
    id: 6,
    fullname: "راحله میرمجربیان",
    gender: "female",
    turn_type: "consult",
  },
  {
    id: 7,
    fullname: "محمد امین",
    gender: "male",
    turn_type: "non-consult",
  },
];

export default function ListComponent() {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender") || "";
  const turn_type = searchParams.get("turn_type") || "";

  const filter = (item: Doctor) => {
    if (gender && !turn_type) {
      if (item.gender === gender) {
        return true;
      } else {
        return false;
      }
    }

    if (!gender && turn_type) {
      if (item.turn_type === turn_type) {
        return true;
      } else {
        return false;
      }
    }

    if (gender && turn_type) {
      if (item.turn_type === turn_type && item.gender === gender) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  };

  return (
    <div className={styles.list}>
      {doctors.filter(filter).map((doctor) => {
        return <ItemComponent fullname={doctor.fullname} />;
      })}
    </div>
  );
}
