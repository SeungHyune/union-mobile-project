import { useEffect } from "react";
import { AUTO_SLIDER_DELAY } from "../../profileImageSlider.constants";

interface UseAutoSlideProps {
  page: number;
  profileListLength: number;
  handleSelectSlide: (page: number) => void;
}

const useAutoSlide = ({
  page,
  profileListLength,
  handleSelectSlide,
}: UseAutoSlideProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (page === profileListLength) {
        handleSelectSlide(1);
      } else {
        handleSelectSlide(page + 1);
      }
    }, AUTO_SLIDER_DELAY);

    return () => {
      clearInterval(interval);
    };
  }, [page]);
};

export default useAutoSlide;
