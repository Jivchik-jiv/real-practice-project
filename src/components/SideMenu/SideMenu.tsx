import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import userImg from "../../img/user.png";
import routes from "../../routes";
import { selectisAuthorized } from "../../store/selectors";
import LogoutBtn from "../Auth/LogoutBtn/LogoutBtn";
import styles from "./SideMenue.module.css";
import cx from "classnames";

const makeClassName = (isActive: boolean) => {
  return cx({
    [styles.nav]: true,
    [styles.active]: isActive,
  });
};

const SideMenue = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isAuthorized = useSelector(selectisAuthorized);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <img src={userImg} alt="user-image" className={styles.img} />
      {isOpen && (
        <div className={styles.dropMenue}>
          <ul className={styles.list}>
            {!isAuthorized && (
              <NavLink
                to={routes.login}
                className={({ isActive }) => makeClassName(isActive)}
              >
                Log-in
              </NavLink>
            )}
            {!isAuthorized && (
              <NavLink
                to={routes.signup}
                className={({ isActive }) => makeClassName(isActive)}
              >
                Sign-up
              </NavLink>
            )}
            {isAuthorized && <LogoutBtn />}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideMenue;
