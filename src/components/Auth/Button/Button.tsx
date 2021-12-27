import * as React from "react";
import styles from "./Button.module.css";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <button type="submit" className={styles.btn}>
      {title}
    </button>
  );
};

export default Button;
