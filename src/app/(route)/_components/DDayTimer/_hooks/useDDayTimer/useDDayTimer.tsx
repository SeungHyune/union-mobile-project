import { useEffect } from "react";
import { DDAY } from "../../ddayTimer.constants";
import useDDayTimerStore from "@/app/_store/useDDayTimerStore/useDDayTimerStore";

const useDDayTimer = () => {
  const targetDate = new Date(DDAY);

  const { dday, setDDay } = useDDayTimerStore();

  useEffect(() => {
    const ddayInterval = setInterval(() => {
      const now = new Date();
      const ddayCountdown = targetDate.getTime() - now.getTime();

      if (ddayCountdown < 0) {
        clearInterval(ddayInterval);
        setDDay({ days: 0, hours: 0, mins: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(ddayCountdown / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (ddayCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((ddayCountdown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((ddayCountdown % (1000 * 60)) / 1000);

      setDDay({ days, hours, mins, seconds });
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
