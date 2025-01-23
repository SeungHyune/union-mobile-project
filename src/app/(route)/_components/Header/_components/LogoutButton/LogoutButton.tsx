"use client";

import { CloseIcon } from "@/app/_components/server/icons";
import { LOGIN_ID } from "@/app/_constants/constants";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";
import { removeCookie } from "@/app/_utils";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const { loginId, setLoginId } = useLoginInfoStore();
  const handleLogOut = () => {
    if (loginId) {
      setLoginId("");
      removeCookie(LOGIN_ID);
      redirect("/login");
    }
  };

  return (
    <button type="button" onClick={handleLogOut}>
      <CloseIcon />
    </button>
  );
};

export default LogoutButton;
