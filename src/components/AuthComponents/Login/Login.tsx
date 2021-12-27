import * as React from "react";
import AuthForm from "../AuthForm/AuthForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.wrap}>
      <h1>Log-in</h1>
      <AuthForm action="Log-in" />
    </div>
  );
};

export default Login;
