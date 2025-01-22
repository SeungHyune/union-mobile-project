"use client";

import { CandidateProfileInfo } from "@/app/_types/response/candidate/candidate";
import Image from "next/image";
import styles from "./profileImageSlider.module.css";
import { useRef, useState } from "react";

interface ProfileImageSliderProps {
  candidateName: string;
  profileInfoList: CandidateProfileInfo[];
}

const ProfileImageSlider = ({
  candidateName,
  profileInfoList,
}: ProfileImageSliderProps) => {
  const [page, setPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const dragOffsetRef = useRef(0);

  const handleSliderPageMove = (selectPage: number) => {
    setPage(selectPage);
  };

  const handlePrevSlide = () => {
    setPage((currentPage) => (currentPage > 1 ? currentPage - 1 : currentPage));
  };

  const handleNextSlide = () => {
    setPage((currentPage) =>
      currentPage === profileInfoList.length ? currentPage : currentPage + 1,
    );
  };

  const handleDragStart = (
    event:
      | React.MouseEvent<HTMLUListElement>
      | React.TouchEvent<HTMLUListElement>,
  ) => {
    setIsDragging(true);

    if (event.type === "touchstart" && "touches" in event) {
      startX.current = event.touches[0].clientX;
      return;
    }

    if (event.type === "mousedown" && "clientX" in event) {
      startX.current = event.clientX;
    }
  };

  const handleDrag = (
    event:
      | React.MouseEvent<HTMLUListElement>
      | React.TouchEvent<HTMLUListElement>,
  ) => {
    if (!isDragging) {
      return;
    }

    let currentX = 0;

    if (event.type === "touchmove" && "touches" in event) {
      currentX = event.touches[0].clientX;
    } else if (event.type === "mousemove" && "clientX" in event) {
      currentX = event.clientX;
    }

    dragOffsetRef.current = currentX - startX.current;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${(page - 1) * 100}vw + ${dragOffsetRef.current}px))`;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    const dragThreshold = window.innerWidth * 0.5;

    if (dragOffsetRef.current > dragThreshold) {
      handlePrevSlide();
    } else if (dragOffsetRef.current < -dragThreshold) {
      handleNextSlide();
    }

    dragOffsetRef.current = 0;

    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.3s ease";
      sliderRef.current.style.transform = `translateX(-${(page - 1) * 100}vw)`;
    }
  };

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
              onClick={() => handleSliderPageMove(index + 1)}
            ></li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProfileImageSlider;
