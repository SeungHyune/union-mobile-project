import { fetchApi } from "@/app/_api";
import { VOTE } from "@/app/_constants/endPoint";

interface FetchVoteSubmitProps {
  userId: string;
  candidateId: number;
}

export const fetchVoteSubmit = async ({
  userId,
  candidateId,
}: FetchVoteSubmitProps) => {
  const requestBody = {
    userId,
    id: candidateId,
  };

  const response = await fetchApi(`${VOTE.VOTE}`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    return true;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
