"use client";

import styles from "./candidateList.module.css";
import { useQuery } from "@tanstack/react-query";
import { CandidateListResponse } from "@/app/_types/response/candidate/candidate";
import { getCandidateList } from "@/app/_service/candidate/candidate";
import { CANDIDATE_KEY } from "@/app/_constants/queryKey/queryKey";
import CandidateItem from "../CandidateItem/CandidateItem";

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

  if (!candidates) {
    return null;
  }

  const { content } = candidates;

  return (
    <ul className={styles.candidateList}>
      {content.map(({ id, name, profileUrl, voteCnt }) => {
        return (
          <CandidateItem
            key={id}
            id={id}
            name={name}
            profileUrl={profileUrl}
            voteCnt={voteCnt}
          />
        );
      })}
    </ul>
  );
};

export default CandidateList;
