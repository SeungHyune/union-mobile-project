import { RefObject, useRef, useState } from "react";

interface UseSliderDragActionProps {
  page: number;
  sliderRef: RefObject<HTMLUListElement | null>;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

const useSliderDragAction = ({
  page,
  sliderRef,
  handlePrevSlide,
  handleNextSlide,
}: UseSliderDragActionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const dragOffsetRef = useRef(0);

  const handleDragStart = (
    event:
      | React.MouseEvent<HTMLUListElement>
      | React.TouchEvent<HTMLUListElement>,
  ) => {
    setIsDragging(true);

    if (event.type === "touchstart" && "touches" in event) {
      startX.current = event.touches[0].clientX;
      return;
    }

    if (event.type === "mousedown" && "clientX" in event) {
      startX.current = event.clientX;
    }
  };

  const handleDrag = (
    event:
      | React.MouseEvent<HTMLUListElement>
      | React.TouchEvent<HTMLUListElement>,
  ) => {
    if (!isDragging) {
      return;
    }

    let currentX = 0;

    if (event.type === "touchmove" && "touches" in event) {
      currentX = event.touches[0].clientX;
    } else if (event.type === "mousemove" && "clientX" in event) {
      currentX = event.clientX;
    }

    dragOffsetRef.current = currentX - startX.current;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${(page - 1) * 100}vw + ${dragOffsetRef.current}px))`;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    const dragThreshold = window.innerWidth * 0.5;

    if (dragOffsetRef.current > dragThreshold) {
      handlePrevSlide();
    } else if (dragOffsetRef.current < -dragThreshold) {
      handleNextSlide();
    }

    dragOffsetRef.current = 0;

    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.3s ease";
      sliderRef.current.style.transform = `translateX(-${(page - 1) * 100}vw)`;
    }
  };

  return { isDragging, handleDragStart, handleDrag, handleDragEnd };
};

export default useSliderDragAction;
