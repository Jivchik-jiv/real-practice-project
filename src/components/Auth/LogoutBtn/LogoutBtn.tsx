import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../AuthThunks";
import styles from "../Auth.module.css";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
      Logout
    </button>
  );
};

export default LogoutBtn;
