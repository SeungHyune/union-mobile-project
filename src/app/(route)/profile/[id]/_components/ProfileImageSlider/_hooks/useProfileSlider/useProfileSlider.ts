import { useState } from "react";

interface UseProfileSliderProps {
  profileListLength: number;
}

const useProfileSlider = ({ profileListLength }: UseProfileSliderProps) => {
  const [page, setPage] = useState(1);
  const handleSelectSlide = (selectPage: number) => {
    setPage(selectPage);
  };

  const handlePrevSlide = () => {
    setPage((currentPage) => (currentPage > 1 ? currentPage - 1 : currentPage));
  };

  const handleNextSlide = () => {
    setPage((currentPage) =>
      currentPage === profileListLength ? currentPage : currentPage + 1,
    );
  };

  return { page, handleSelectSlide, handlePrevSlide, handleNextSlide };
};

export default useProfileSlider;
