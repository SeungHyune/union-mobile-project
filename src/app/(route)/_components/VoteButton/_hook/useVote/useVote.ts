import { CANDIDATE_KEY, VOTE_KEY } from "@/app/_constants/queryKey/queryKey";
import { useVotedCandidates } from "@/app/_hooks";
import { fetchVoteSubmit } from "@/app/_service/vote/vote";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseVoteProps {
  candidateId: number;
  handleCompleteModalOpenToggle: () => void;
  handleIncompleteOpenToggle: () => void;
}

const useVote = ({
  candidateId,
  handleCompleteModalOpenToggle,
  handleIncompleteOpenToggle,
}: UseVoteProps) => {
  const queryClient = useQueryClient();
  const { loginId } = useLoginInfoStore();
  const { votedCandidates } = useVotedCandidates();

  const voteSubmitMutation = useMutation({
    mutationKey: [VOTE_KEY.SUBMIT, candidateId],
    mutationFn: fetchVoteSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CANDIDATE_KEY.LIST] });
      queryClient.invalidateQueries({ queryKey: [CANDIDATE_KEY.VOTED_LIST] });
      queryClient.invalidateQueries({ queryKey: [CANDIDATE_KEY.DETAIL] });
      handleCompleteModalOpenToggle();
    },
  });

  const handleVoteSubmit = () => {
    if (votedCandidates.length >= 3) {
      handleIncompleteOpenToggle();
      return;
    }

    voteSubmitMutation.mutate({ userId: loginId, candidateId });
  };

  return {
    handleVoteSubmit,
  };
};

export default useVote;
