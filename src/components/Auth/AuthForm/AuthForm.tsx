import * as React from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../AuthThunks";
import Button from "../Button/Button";
import styles from "./AuthForm.module.css";

type Props = {
  isNewUser: boolean;
};

const AuthForm = ({ isNewUser }: Props) => {
  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isNewUser) {
      let params = { name, email, password };
      dispatch(register(params));
    } else {
      let params = { email, password };
      dispatch(login(params));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isNewUser && (
        <label className={styles.label}>
          <span className={styles.labelText}>Name:</span>
          <input
            pattern="[A-Za-z]+"
            type="text"
            required
            value={name}
            onChange={(event) => {
              setName(event.currentTarget.value);
            }}
          />
        </label>
      )}
      <label className={styles.label}>
        <span className={styles.labelText}>Email:</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.currentTarget.value);
          }}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelText}>Pass:</span>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
      </label>
      <Button title={isNewUser ? "Sign-up" : "Log-in"} />
    </form>
  );
};

export default AuthForm;
