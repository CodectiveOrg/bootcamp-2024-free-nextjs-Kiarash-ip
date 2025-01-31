"use client";

import { ReactElement, useEffect, useState } from "react";

import CardComponent from "@/components/card/card.component";

import StarFill from "@/icons/StarFill";

import styles from "./comments.module.css";
import { CommentModel } from "@/models/comments.model";
import RatingComponent from "../rating/rating.component";
import ProgressComponent from "../progress/progress.component";
import SortComponent from "../sort/sort.component";
import { SelectOptionType } from "@/types/select-option.type";

const formatter = new Intl.RelativeTimeFormat("fa-IR-u-nu-latn");

type Props = {
  comments: CommentModel[];
  name: string;
  average: number;
  votes: number;
};

const options: SelectOptionType[] = [
  { value: "relative", label: "مرتبط ترین" },
  { value: "date", label: "جدید ترین" },
];

export default function CommentsComponent({
  comments,
  name,
  average,
  votes,
}: Props): ReactElement {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options[0],
  );
  const [filteredComments, setFilteredComments] = useState(comments);
  const calculateRelativeTime = (date: Date) => {
    return Math.floor((+date - Date.now()) / (24 * 3600 * 1000));
  };

  useEffect(() => {
    if (selectedOption.value === "date") {
      setFilteredComments(() => {
        const cloneComments = [...comments];
        return cloneComments.sort((a, b) => {
          return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        });
      });
    } else {
      setFilteredComments(comments);
    }
  }, [selectedOption.value, comments]);

  return (
    <CardComponent title={`نظرات در مورد دکتر ${name}`}>
      <div className={styles.ratings}>
        <RatingComponent average={average} votes={votes} />
        <ProgressComponent label="برخورد مناسب پزشک" average={average} />
        <ProgressComponent
          label="توضیح پزشک در هنگام ویزیت"
          average={average}
        />
        <ProgressComponent label="مهارت و تخصص پزشک" average={average} />
      </div>
      <div className={styles.sort}>
        <SortComponent
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className={styles.comments}>
        {filteredComments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.header}>
              <div className={styles.image}>
                {comment.user.name[0].toUpperCase()}
              </div>
              <div className={styles.name}>{comment.user.name}</div>
              <div className={styles.date}>
                {formatter.format(calculateRelativeTime(comment.date), "days")}
              </div>
              <div className={styles.rating}>
                {comment.rating} <StarFill className={styles.icon} />
              </div>
            </div>
            <div className={styles.text}>{comment.text}</div>
          </div>
        ))}
      </div>
    </CardComponent>
  );
}
