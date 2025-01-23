import { fetchApi } from "@/app/_api";
import { CANDIDATE } from "@/app/_constants/endPoint";
import { CandidateListResponse } from "@/app/_types/response/candidate/candidate";
import { QueryFunction } from "@tanstack/react-query";

export const getCandidateList: QueryFunction<
  CandidateListResponse,
  [_1: string, _2: string, _3: number, _4: string[]],
  number
> = async ({ queryKey, pageParam }) => {
  const keyword = queryKey[1] || "";
  const size = queryKey[2];
  const sort = queryKey[3];

  const queryString = `page=${pageParam}&size=${size}&sort=${sort}&searchKeyword=${keyword}`;

  const response = await fetchApi(`${CANDIDATE.LIST}?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

interface GetVotedListProps {
  userId: string;
}

export const getVotedList = async ({ userId }: GetVotedListProps) => {
  const response = await fetchApi(`${CANDIDATE.VOTED_LIST}?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

interface GetCandidateDetailProps {
  candidateId: string;
  userId: string;
}

export const getCandidateDetail = async ({
  candidateId,
  userId,
}: GetCandidateDetailProps) => {
  const response = await fetchApi(
    `${CANDIDATE.DETAIL}/${candidateId}?userId=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
