import * as React from "react";
import { useSelector } from "react-redux";
import authorizedUSer from "../../img/monster.png";
import { selectUSerName } from "../Auth/AuthSlice";
import styles from "./Profile.module.css";

const MiniProfile = () => {
  const user = useSelector(selectUSerName);

  return (
    <div className={styles.miniProfile}>
      <img src={authorizedUSer} alt="Avatar" className={styles.miniImg} />
      <p className={styles.text}>{user}</p>
    </div>
  );
};

export default MiniProfile;
