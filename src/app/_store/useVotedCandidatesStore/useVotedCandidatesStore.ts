import { create } from "zustand";

interface UseVotedCandidatesStoreProps {
  votedCandidates: number[];
  setVotedCandidates: (newVotedCandidates: number[]) => void;
}

export const useVotedCandidatesStore = create<UseVotedCandidatesStoreProps>(
  (set) => ({
    votedCandidates: [],
    setVotedCandidates: (newVotedCandidates) =>
      set({ votedCandidates: [...newVotedCandidates] }),
  }),
);
