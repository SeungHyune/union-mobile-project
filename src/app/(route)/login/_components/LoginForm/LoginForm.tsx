"use client";

import styles from "./loginForm.module.css";
import { useLoginForm } from "./_hooks";

const LoginForm = () => {
  const {
    userId,
    isLoginValidate,
    loginErrorMessage,
    handleLoginIdChange,
    handleLoginSubmit,
  } = useLoginForm();

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
