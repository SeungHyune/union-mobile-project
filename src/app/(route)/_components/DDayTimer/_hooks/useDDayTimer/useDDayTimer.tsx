import { useEffect, useState } from "react";
import { DDAY } from "../../ddayTimer.constants";

const useDDayTimer = () => {
  const targetDate = new Date(DDAY);

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

  return {
    days: dday.days,
    hours: dday.hours,
    mins: dday.mins,
    seconds: dday.seconds,
  };
};

export default useDDayTimer;
