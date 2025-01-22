import { CANDIDATE_KEY } from "@/app/_constants/queryKey/queryKey";
import { getVotedList } from "@/app/_service/candidate/candidate";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";
import { useQuery } from "@tanstack/react-query";

const useVotedCandidates = () => {
  const { loginId } = useLoginInfoStore();

  const { data: votedCandidates } = useQuery<number[]>({
    queryKey: [CANDIDATE_KEY.VOTED_LIST],
    queryFn: () => getVotedList({ userId: loginId }),
    enabled: !!loginId,
  });

  return {
    votedCandidates: votedCandidates || [],
  };
};

export default useVotedCandidates;
