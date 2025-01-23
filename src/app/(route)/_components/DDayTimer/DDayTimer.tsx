"use client";

import { TimerItem } from "./_components";
import { useDDayTimer } from "./_hooks";
import { TIMER_LABEL } from "./ddayTimer.constants";
import styles from "./ddayTimer.module.css";

const DDayTimer = () => {
  const { days, hours, mins, seconds } = useDDayTimer();

  return (
    <article className={styles.timerContainer}>
      <TimerItem timeValue={days} label={TIMER_LABEL.DAYS} />
      <TimerItem timeValue={hours} label={TIMER_LABEL.HOURS} />
      <TimerItem timeValue={mins} label={TIMER_LABEL.MINS} />
      <TimerItem timeValue={seconds} label={TIMER_LABEL.SECONDS} />
    </article>
  );
};

export default DDayTimer;
