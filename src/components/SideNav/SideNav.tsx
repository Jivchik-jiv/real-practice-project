import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import anonUser from "../../img/user.png";
import authorizedUSer from "../../img/monster.png";
import routes from "../../routes";
import { selectisAuthorized } from "../../store/selectors";
import LogoutBtn from "../Auth/LogoutBtn/LogoutBtn";
import styles from "./SideNav.module.css";
import cx from "classnames";
import MiniProfile from "../Profile/MiniProfile";

const makeClassName = (isActive: boolean, isAuthorized: boolean) => {
  return cx({
    [styles.nonAuthNav]: !isAuthorized,
    [styles.authNav]: isAuthorized,
    [styles.active]: isActive,
  });
};

const SideNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isAuthorized = useSelector(selectisAuthorized);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={styles.sideNav}>
      <img
        src={isAuthorized ? authorizedUSer : anonUser}
        alt="user"
        className={styles.img}
      />
      {isOpen && (
        <div className={styles.dropMenue}>
          {!isAuthorized && (
            <ul className={styles.list}>
              <NavLink
                to={routes.login}
                className={({ isActive }) =>
                  makeClassName(isActive, isAuthorized)
                }
              >
                Log-in
              </NavLink>
              <NavLink
                to={routes.signup}
                className={({ isActive }) =>
                  makeClassName(isActive, isAuthorized)
                }
              >
                Sign-up
              </NavLink>
            </ul>
          )}
          {isAuthorized && (
            <>
              <MiniProfile />
              <div className={styles.settingsWrap}>
                <NavLink
                  to={routes.settings}
                  className={({ isActive }) =>
                    makeClassName(isActive, isAuthorized)
                  }
                >
                  Settings
                </NavLink>
              </div>
              <div className={styles.logoutBtnWrap}>
                <LogoutBtn />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SideNav;
