import { create } from "zustand";

interface IDDay {
  days: number;
  hours: number;
  mins: number;
  seconds: number;
}

interface UseDDayTimerStoreProps {
  dday: IDDay;
  setDDay: (newDDay: IDDay) => void;
}

const useDDayTimerStore = create<UseDDayTimerStoreProps>((set) => ({
  dday: { days: 0, hours: 0, mins: 0, seconds: 0 },
  setDDay: (newDDay) => set({ dday: { ...newDDay } }),
}));

export default useDDayTimerStore;
