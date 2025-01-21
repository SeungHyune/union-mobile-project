"use client";

import { CloseIcon } from "@/app/_components/server/icons";

const LogoutButton = () => {
  const handleLogOut = () => {
    const isLogin = !!localStorage.getItem("loginId");

    if (isLogin) {
      localStorage.removeItem("loginId");
    }
  };

  return (
    <button type="button" onClick={handleLogOut}>
      <CloseIcon />
    </button>
  );
};

export default LogoutButton;
