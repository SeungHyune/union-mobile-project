"use client";

import { fetchVoteSubmit } from "@/app/_service/vote/vote";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./voteButton.module.css";
import { CANDIDATE_KEY, VOTE_KEY } from "@/app/_constants/queryKey/queryKey";
import { useVotedCandidatesStore } from "@/app/_store/useVotedCandidatesStore/useVotedCandidatesStore";
import { useMemo } from "react";

interface VoteToggleButtonProps {
  candidateId: number;
  height?: string;
  handleCompleteModalOpenToggle: () => void;
  handleIncompleteOpenToggle: () => void;
}

const VoteToggleButton = ({
  candidateId,
  height = "3.2rem",
  handleCompleteModalOpenToggle,
  handleIncompleteOpenToggle,
}: VoteToggleButtonProps) => {
  const queryClient = useQueryClient();
  const { loginId } = useLoginInfoStore();
  const { votedCandidates } = useVotedCandidatesStore();

  const voteToggleMutation = useMutation({
    mutationKey: [VOTE_KEY.SUBMIT, candidateId],
    mutationFn: fetchVoteSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CANDIDATE_KEY.LIST] });
      queryClient.invalidateQueries({ queryKey: [CANDIDATE_KEY.VOTED_LIST] });
      handleCompleteModalOpenToggle();
    },
  });

  const handleVoteToggle = () => {
    if (votedCandidates.length >= 3) {
      handleIncompleteOpenToggle();
      return;
    }

    voteToggleMutation.mutate({ userId: loginId, candidateId });
  };

  const isVoted = useMemo(
    () => votedCandidates.includes(candidateId),
    [votedCandidates, candidateId],
  );

  return (
    <button
      className={styles.voteButton}
      style={{
        background: isVoted ? "#fff" : "#4232D5",
        color: isVoted ? "#4232D5" : "#fff",
        cursor: isVoted ? "auto" : "pointer",
        height,
      }}
      type="button"
      disabled={isVoted}
      onClick={handleVoteToggle}
    >
      {isVoted ? "Voted" : "Vote"}
    </button>
  );
};

export default VoteToggleButton;
