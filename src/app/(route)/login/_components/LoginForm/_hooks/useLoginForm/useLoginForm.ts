import { LOGIN_ID } from "@/app/_constants/constants";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";
import { setCookie } from "@/app/_utils";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const useLoginForm = () => {
  const { loginId, setLoginId } = useLoginInfoStore();
  const [userId, setUserId] = useState("");
  const [isLoginValidate, setIsLoginValidate] = useState(true);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  useEffect(() => {
    if (loginId === "") {
      return;
    }

    redirect("/");
  }, [loginId]);

  const handleLoginIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);

    if (isLoginValidate === false) {
      setIsLoginValidate(false);
      setLoginErrorMessage("");
    }
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginId = userId.trim();
    if (loginId === "" || loginId.length < 3 || loginId.length > 16) {
      setIsLoginValidate(false);
      setLoginErrorMessage(
        "Username must be between 3 and 16 characters long.",
      );
      return;
    }

    const loginValidate = /^[a-zA-Z0-9]+$/;
    if (!loginValidate.test(loginId)) {
      setIsLoginValidate(false);
      setLoginErrorMessage("The ID can only contain letters and numbers.");
      return;
    }

    setLoginId(loginId);
    setCookie(LOGIN_ID, loginId);
  };

  return {
    userId,
    isLoginValidate,
    loginErrorMessage,
    handleLoginIdChange,
    handleLoginSubmit,
  };
};

export default useLoginForm;
