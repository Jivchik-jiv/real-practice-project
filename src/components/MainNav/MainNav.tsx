import * as React from "react";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";
import routs from "../../routes";
import cx from "classnames";
import { useSelector } from "react-redux";
import { selectisAuthorized } from "../../store/selectors";

const makeClassName = (isActive: boolean) => {
  return cx({
    [styles.nav]: true,
    [styles.active]: isActive,
  });
};

const MainNav = () => {
  const isAuthorized = useSelector(selectisAuthorized);

  return (
    <ul className={styles.list}>
      <NavLink
        to={routs.main}
        className={({ isActive }) => makeClassName(isActive)}
      >
        Main
      </NavLink>
      <NavLink
        to={routs.about}
        className={({ isActive }) => makeClassName(isActive)}
      >
        About
      </NavLink>
      {isAuthorized && (
        <NavLink
          to={routs.profile}
          className={({ isActive }) => makeClassName(isActive)}
        >
          Profile
        </NavLink>
      )}
      {isAuthorized && (
        <NavLink
          to={routs.contacts}
          className={({ isActive }) => makeClassName(isActive)}
        >
          Contacts
        </NavLink>
      )}
    </ul>
  );
};

export default MainNav;
