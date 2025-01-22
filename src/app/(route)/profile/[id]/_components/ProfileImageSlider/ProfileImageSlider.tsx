"use client";

import { CandidateProfileInfo } from "@/app/_types/response/candidate/candidate";
import Image from "next/image";
import styles from "./profileImageSlider.module.css";
import { useState } from "react";

interface ProfileImageSliderProps {
  profileInfoList: CandidateProfileInfo[];
}

const ProfileImageSlider = ({ profileInfoList }: ProfileImageSliderProps) => {
  const [page, setPage] = useState(1);

  const handleSliderPageMove = (selectPage: number) => {
    setPage(selectPage);
  };

  return (
    <section className={styles.profileImageSliderSection}>
      <ul
        className={styles.slider}
        style={{
          width: `${profileInfoList.length * 100}vw`,
          transform: `translateX(-${(page - 1) * 100}vw)`,
        }}
      >
        {profileInfoList.map(({ profileUrl }, index) => {
          return (
            <li key={index}>
              <Image src={profileUrl} alt="" fill priority />
            </li>
          );
        })}
      </ul>
      <ul className={styles.circleList}>
        {profileInfoList.map((_, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor:
                  page === index + 1 ? "#4232D5" : "rgba(255,255,255,0.5)",
              }}
              onClick={() => handleSliderPageMove(index + 1)}
            ></li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProfileImageSlider;
