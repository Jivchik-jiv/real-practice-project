import * as React from "react";
import Button from "../Button/Button";
import styles from "./AuthForm.module.css";

type Props = {
  action: "Log-in" | "Sign-up";
};

const AuthForm = ({ action }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`${action}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {action === "Sign-up" && (
        <label className={styles.label}>
          <span className={styles.labelText}>Name:</span>
          <input type="text" />
        </label>
      )}
      <label className={styles.label}>
        <span className={styles.labelText}>Email:</span>
        <input type="text" />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Pass:</span>
        <input type="text" />
      </label>
      <Button title={action} />
    </form>
  );
};

export default AuthForm;
