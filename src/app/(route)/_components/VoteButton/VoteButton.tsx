"use client";

import styles from "./voteButton.module.css";
import { useVote } from "./_hook";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { VoteCompletedIcon } from "@/app/_components/server/icons";

interface VoteToggleButtonProps {
  isVoted: boolean;
  candidateId: number;
  height?: string;
  handleCompleteModalOpenToggle: () => void;
  handleIncompleteOpenToggle: () => void;
}

const VoteButton = ({
  isVoted,
  candidateId,
  height = "3.2rem",
  handleCompleteModalOpenToggle,
  handleIncompleteOpenToggle,
}: VoteToggleButtonProps) => {
  const pathname = usePathname();
  const { handleVoteSubmit } = useVote({
    candidateId,
    handleCompleteModalOpenToggle,
    handleIncompleteOpenToggle,
  });

  const isVotedCompleteIcon = useMemo(() => {
    return pathname.includes("/profile");
  }, [pathname, isVoted]);

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
      onClick={handleVoteSubmit}
    >
      {isVotedCompleteIcon && isVoted ? <VoteCompletedIcon /> : <></>}
      {isVoted ? "Voted" : "Vote"}
    </button>
  );
};

export default VoteButton;
