"use client";

import { CandidateProfileInfo } from "@/app/_types/response/candidate/candidate";
import Image from "next/image";
import styles from "./profileImageSlider.module.css";
import { useRef } from "react";
import { useSliderDragAction, useProfileSlider, useAutoSlide } from "./_hooks";

interface ProfileImageSliderProps {
  candidateName: string;
  profileInfoList: CandidateProfileInfo[];
}

const ProfileImageSlider = ({
  candidateName,
  profileInfoList,
}: ProfileImageSliderProps) => {
  const sliderRef = useRef<HTMLUListElement>(null);

  const { page, handleSelectSlide, handlePrevSlide, handleNextSlide } =
    useProfileSlider({ profileListLength: profileInfoList.length });

  const { isDragging, handleDragStart, handleDrag, handleDragEnd } =
    useSliderDragAction({ page, sliderRef, handlePrevSlide, handleNextSlide });

  useAutoSlide({
    page,
    profileListLength: profileInfoList.length,
    handleSelectSlide,
  });

  return (
    <section className={styles.profileImageSliderSection}>
      <ul
        className={styles.slider}
        style={{
          width: `${profileInfoList.length * 100}vw`,
          transition: isDragging ? "none" : "transform 0.3s ease",
          transform: `translateX(-${(page - 1) * 100}vw)`,
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDrag}
        onTouchMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchEnd={handleDragEnd}
        ref={sliderRef}
      >
        {profileInfoList.map(({ profileUrl }, index) => {
          return (
            <li key={index}>
              <Image
                src={profileUrl}
                alt={`${candidateName} ${index} image`}
                fill
                priority
              />
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
              onClick={() => handleSelectSlide(index + 1)}
            ></li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProfileImageSlider;
