"use client";

import { CloseIcon } from "@/app/_components/server/icons";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";

const LogoutButton = () => {
  const { loginId, setLoginId } = useLoginInfoStore();
  const handleLogOut = () => {
    if (loginId) {
      setLoginId("");
    }
  };

  return (
    <button type="button" onClick={handleLogOut}>
      <CloseIcon />
    </button>
  );
};

export default LogoutButton;
