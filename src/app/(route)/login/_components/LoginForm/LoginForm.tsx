"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./loginForm.module.css";
import { useLoginInfoStore } from "@/app/_store/useLoginInfoStore/useLoginInfoStore";

const LoginForm = () => {
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

    setLoginId(userId);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLoginSubmit}>
      <div>
        <input
          type="text"
          name="userId"
          id="userId"
          placeholder="Enter your ID"
          value={userId}
          onChange={handleLoginIdChange}
        />
        {isLoginValidate === false ? (
          <p>
            <span>{loginErrorMessage}</span>
          </p>
        ) : null}
      </div>
      <button>Log in</button>
    </form>
  );
};

export default LoginForm;
