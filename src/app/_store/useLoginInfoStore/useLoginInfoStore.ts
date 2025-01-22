import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseLoginInfoStoreProps {
  loginId: string;
  setLoginId: (newLoginId: string) => void;
}

export const useLoginInfoStore = create(
  persist<UseLoginInfoStoreProps>(
    (set) => ({
      loginId: "",
      setLoginId: (newLoginId) => set({ loginId: newLoginId }),
    }),
    {
      name: "login-id",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
