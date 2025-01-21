"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [loginId, setLoginId] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoginValidate, setIsLoginValidate] = useState(true);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  useEffect(() => {
    const storagedLoginId = localStorage.getItem("loginId") || "";
    setLoginId(storagedLoginId);

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
    if (loginId === "" || loginId.length < 3) {
      setIsLoginValidate(false);
      setLoginErrorMessage("The ID must be at least 3 characters long.");
      return;
    }

    const loginValidate = /^[a-zA-Z0-9]+$/;
    if (!loginValidate.test(loginId)) {
      setIsLoginValidate(false);
      setLoginErrorMessage("The ID can only contain letters and numbers.");
      return;
    }

    localStorage.setItem("loginId", userId);
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
