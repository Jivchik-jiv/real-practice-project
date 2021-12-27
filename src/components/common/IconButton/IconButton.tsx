import * as React from "react";
import styles from "./IconButton.module.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  onClick: () => void;
};

const IconButton = ({ children, onClick }: Props) => (
  <button type="button" onClick={onClick} className={styles.btn}>
    {children}
  </button>
);

export default IconButton;
