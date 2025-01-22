import { fetchApi } from "@/app/_api";
import { CANDIDATE } from "@/app/_constants/endPoint";

interface GetCandidateListProps {
  page: string;
  size: string;
  sort: ("voteCnt,DESC" | "name,ASC" | "candidateNumber,ASC")[];
  keyword?: string;
}

export const getCandidateList = async ({
  page,
  size,
  sort,
  keyword,
}: GetCandidateListProps) => {
  const queryString = `page=${page}&size=${size}&sort=${sort}&searchKeyword=${keyword ? keyword : ""}`;

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
