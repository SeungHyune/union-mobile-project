"use client";

import { useEffect, useState } from "react";
import styles from "./ddayTimer.module.css";

const DDayTimer = () => {
  const targetDate = new Date("2025-02-03T00:00:00");

  const [dday, setDday] = useState({ days: 0, hours: 0, mins: 0, seconds: 0 });

  useEffect(() => {
    const ddayInterval = setInterval(() => {
      const now = new Date();
      const ddayCountdown = targetDate.getTime() - now.getTime();

      if (ddayCountdown < 0) {
        clearInterval(ddayInterval);
        setDday({ days: 0, hours: 0, mins: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(ddayCountdown / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (ddayCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((ddayCountdown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((ddayCountdown % (1000 * 60)) / 1000);

      setDday({ days, hours, mins, seconds });
    }, 1000);

    return () => clearInterval(ddayInterval);
  }, [targetDate]);

  return (
    <article className={styles.timerContainer}>
      <div>
        <time>{dday.days}</time>
        <span>DAY</span>
      </div>
      <div>
        <time>{dday.hours}</time>
        <span>HR</span>
      </div>
      <div>
        <time>{dday.mins}</time>
        <span>MIN</span>
      </div>
      <div>
        <time>{dday.seconds}</time>
        <span>SEC</span>
      </div>
    </article>
  );
};

export default DDayTimer;
