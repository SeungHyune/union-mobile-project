"use client";

import styles from "./candidateList.module.css";
import { useQuery } from "@tanstack/react-query";
import { CandidateListResponse } from "@/app/_types/response/candidate/candidate";
import { getCandidateList } from "@/app/_service/candidate/candidate";
import { CANDIDATE_KEY } from "@/app/_constants/queryKey/queryKey";
import CandidateItem from "../CandidateItem/CandidateItem";
import { useToggle, useVotedCandidates } from "@/app/_hooks";
import { ConfirmModal } from "@/app/_components/client";
import {
  VOTE_COMPLETE_MODAL,
  VOTE_INCOMPLETE_MODAL,
} from "./candidate.constants";

const CandidateList = () => {
  const { data: candidates } = useQuery<CandidateListResponse>({
    queryKey: [CANDIDATE_KEY.LIST],
    queryFn: () =>
      getCandidateList({
        page: String(0),
        size: String(10),
        sort: ["name,ASC"],
      }),
  });

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

  if (!candidates) {
    return null;
  }

  const { content } = candidates;

  return (
    <>
      <ul className={styles.candidateList}>
        {content.map(({ id, name, profileUrl, voteCnt }) => {
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
