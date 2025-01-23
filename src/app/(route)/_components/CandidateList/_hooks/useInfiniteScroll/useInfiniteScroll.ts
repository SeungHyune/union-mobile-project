import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { PAGE_SIZE, SORT_OPTIONS } from "../../candidate.constants";
import { CANDIDATE_KEY } from "@/app/_constants/queryKey/queryKey";
import { getCandidateList } from "@/app/_service/candidate/candidate";
import { useEffect } from "react";

interface UseInfiniteScrollProps {
  keyword: string;
}

const useInfiniteScroll = ({ keyword }: UseInfiniteScrollProps) => {
  const { inView, ref } = useInView();
  const {
    data: candidateList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [CANDIDATE_KEY.LIST, keyword, PAGE_SIZE, SORT_OPTIONS],
    queryFn: getCandidateList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.totalElements > allPage.length * PAGE_SIZE
          ? allPage.length + 1
          : undefined;

      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return {
    ref,
    candidateList,
  };
};

export default useInfiniteScroll;
