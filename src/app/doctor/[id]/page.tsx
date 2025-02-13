import React from "react";

import { notFound } from "next/navigation";

import AbstractComponent from "./components/abstract/abstract.component";
import AboutComponent from "./components/about/about.component";
import ActivitiesComponent from "./components/activities/activities.component";
import CommentsComponent from "./components/comments/comments.component";
import AppointmentComponent from "./components/appointment/appointment.component";
import ContactComponent from "./components/contact/contact.component";

import { DetailedDoctorModel } from "@/models/doctor.detail.model";

import { doctors } from "@/mock/doctors";

import styles from "./page.module.css";

type Props = {
  params: {
    id: string;
  };
};

export default async function Doctor({ params }: Props) {
  const doctor = await getDoctor(params.id);

  if (!doctor) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.info}>
        <AbstractComponent doctor={doctor} />
        <AboutComponent doctor={doctor} />
        <ActivitiesComponent doctor={doctor} />
        <CommentsComponent
          name={doctor.name}
          comments={doctor.comments}
          average={doctor.averageRating}
          votes={doctor.totalVotes}
        />
      </div>
      <div className={styles.actions}>
        <AppointmentComponent doctor={doctor} />
        <ContactComponent doctor={doctor} />
      </div>
    </div>
  );
}

async function getDoctor(id: string): Promise<DetailedDoctorModel | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const doctor = doctors.find((doctor) => doctor.id === id);

      if (!doctor) {
        return resolve(doctor);
      }

      return resolve({
        ...doctor,
        experience: 29,
        mcNumber: 58549,
        about: [
          "29 سال سابقه طبابت",
          "رتبه برتر بورد تخصص از دانشگاه علوم پزشکی شهید بهشتی",
          "ویزیت آنلاین و‌ حضوری متخصص عفونی در زمینه های:",
          "مشاوره و درمان زخمهای مزمن، عروقی و زخم پای دیابتی با روش های نوین",
        ].join("\n"),
        consultations: 11995,
        membershipDuration: "4 سال و 1 ماه",
        price: 300_000,
        phone: "021-26200832",
        comments: [
          {
            id: "3",
            user: {
              id: "3",
              username: "alemeh",
              name: "عالمه",
            },
            date: new Date(Date.now() - 21 * 24 * 3600 * 1000),
            rating: 5,
            text: [
              "آقای دکتر بسیار با دقت و صبوری، به سوالات پاسخ میدهند، شرایط سنی بیمار و داروی مناسب برای سن بیمارشان رو حتما در نظر میگیرن. با صحبتهاشون، آرامش رو به بیمارشان میدن.",
            ].join("\n"),
          },
          {
            id: "2",
            user: {
              id: "2",
              username: "azizeh",
              name: "عزیزه",
            },
            date: new Date(Date.now() - 17 * 24 * 3600 * 1000),
            rating: 4,
            text: [
              "بیماری من با سرفه و‌ تب و لرز و بیحالی و‌ بدن درد شروع شد سرفه های شدیدی داشتم کم کم تنگی نفس هم پیدا کردم‌ دکتر دستگیر وقتی کامل معاینه کردند گفتند ویروس جدید کرونا هست",
            ].join("\n"),
          },
          {
            id: "1",
            user: {
              id: "1",
              username: "karen",
              name: "کارن",
            },
            date: new Date(Date.now() - 5 * 24 * 3600 * 1000),
            rating: 5,
            text: [
              "علت مراجعه ما عفونت بعد از عمل جراحی بود. همسر من سه ماه پیش دچار شکستگی استخوان ران شد که متاسفانه در شهرستان بعد از جراحی دچار عفونت شدید محل عمل جراحی شد، هیچ پزشک دیگری هم به ما پذیرش نمیداد",
            ].join("\n"),
          },
        ],
      });
    }, 1000);
  });
}
