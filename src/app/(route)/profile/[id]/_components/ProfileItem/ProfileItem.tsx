"use client";

import { CANDIDATE_KEY } from "@/app/_constants/queryKey/queryKey";
import { getCandidateDetail } from "@/app/_service/candidate/candidate";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";
import { useQuery } from "@tanstack/react-query";
import ProfileImageSlider from "../ProfileImageSlider/ProfileImageSlider";
import { CandidateDetailResponse } from "@/app/_types/response/candidate/candidate";
import ProfileContent from "../ProfileContent/ProfileContent";
import styles from "./profileItem.module.css";

import { useToggle } from "@/app/_hooks";
import {
  VOTE_COMPLETE_MODAL,
  VOTE_INCOMPLETE_MODAL,
} from "@/app/(route)/_components/CandidateList/candidate.constants";
import { ConfirmModal } from "@/app/_components/client";
import { VoteButton } from "@/app/(route)/_components";

interface ProfileItemProps {
  candidateId: string;
}

const ProfileItem = ({ candidateId }: ProfileItemProps) => {
  const { loginId } = useLoginInfoStore();

  const { data: candidateProfile } = useQuery<CandidateDetailResponse>({
    queryKey: [CANDIDATE_KEY.DETAIL, candidateId],
    queryFn: () => getCandidateDetail({ candidateId, userId: loginId }),
    enabled: !!candidateId,
  });

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

  if (!candidateProfile) {
    return;
  }

  return (
    <section className={styles.profileSection}>
      <ProfileImageSlider
        profileInfoList={candidateProfile.profileInfoList}
        candidateName={candidateProfile.name}
      />
      <section>
        <ProfileContent candidateProfile={candidateProfile} />
        <article className={styles.copyrightContainer}>
          <p>COPYRIGHT © WUPSC ALL RIGHT RESERVED.</p>
        </article>
        <article className={styles.buttonContainer}>
          <VoteButton
            isVoted={candidateProfile.voted}
            candidateId={candidateProfile.id}
            height="4.8rem"
            handleCompleteModalOpenToggle={handleCompleteModalOpenToggle}
            handleIncompleteOpenToggle={handleIncompleteOpenToggle}
          />
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
        </article>
      </section>
    </section>
  );
};

export default ProfileItem;
