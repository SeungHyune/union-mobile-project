import { useState } from "react";

const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleOpenToggle = () => {
    setIsToggle(true);
  };

  const handleCloseToggle = () => {
    setIsToggle(false);
  };

  const handleToggle = () => {
    setIsToggle((isToggle) => !isToggle);
  };

  return {
    isToggle,
    handleOpenToggle,
    handleCloseToggle,
    handleToggle,
  };
};

export default useToggle;
