"use client";

import styles from "./candidateList.module.css";
import CandidateItem from "../CandidateItem/CandidateItem";
import { useToggle, useVotedCandidates } from "@/app/_hooks";
import { ConfirmModal } from "@/app/_components/client";
import {
  VOTE_COMPLETE_MODAL,
  VOTE_INCOMPLETE_MODAL,
} from "./candidate.constants";
import { useInfiniteScroll } from "./_hooks";

interface CandidateListProps {
  keyword?: string;
}

const CandidateList = ({ keyword = "" }: CandidateListProps) => {
  const { ref, candidateList } = useInfiniteScroll({ keyword });

  const { votedCandidates } = useVotedCandidates();

  const {
    isToggle: isCompleteModalToggle,
    handleOpenToggle: handleCompleteModalOpenToggle,
    handleCloseToggle: handleCompleteModalCloseToggle,
  } = useToggle();
  const {
    isToggle: isIncompleteModalToggle,
    handleOpenToggle: handleIncompleteOpenToggle,
    handleCloseToggle: handleIncompleteCloseToggle,
  } = useToggle();

  if (!candidateList) {
    return null;
  }

  const candidates = candidateList?.pages.flatMap((movie) => movie.content);

  return (
    <>
      <ul className={styles.candidateList}>
        {candidates.map(({ id, name, profileUrl, voteCnt }) => {
          return (
            <CandidateItem
              key={id}
              id={id}
              isVoted={(votedCandidates || []).includes(id)}
              name={name}
              profileUrl={profileUrl}
              voteCnt={voteCnt}
              handleCompleteModalOpenToggle={handleCompleteModalOpenToggle}
              handleIncompleteOpenToggle={handleIncompleteOpenToggle}
            />
          );
        })}
      </ul>
      <div ref={ref} />
      <ConfirmModal
        isToggle={isCompleteModalToggle}
        title={VOTE_COMPLETE_MODAL.TITLE}
        content={VOTE_COMPLETE_MODAL.CONTENT}
        completeText={VOTE_COMPLETE_MODAL.COMPLETE_BUTTON_TEXT}
        handleCloseModal={handleCompleteModalCloseToggle}
      />
      <ConfirmModal
        isToggle={isIncompleteModalToggle}
        title={VOTE_INCOMPLETE_MODAL.TITLE}
        content={VOTE_INCOMPLETE_MODAL.CONTENT}
        completeText={VOTE_INCOMPLETE_MODAL.COMPLETE_BUTTON_TEXT}
        handleCloseModal={handleIncompleteCloseToggle}
      />
    </>
  );
};

export default CandidateList;
