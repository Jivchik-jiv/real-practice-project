import * as React from "react";
import AuthForm from "../AuthForm/AuthForm";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.wrap}>
      <h1>Sign-up</h1>
      <AuthForm isNewUser={true} />
    </div>
  );
};

export default Signup;
