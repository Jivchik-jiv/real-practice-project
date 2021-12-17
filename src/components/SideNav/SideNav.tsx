import * as React from 'react';
import { NavLink } from "react-router-dom";
import routs from '../../routes';
import styles from './SideNav.module.css';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { selectisAuthorized } from '../../store/selectors';
import LogoutBtn from '../Auth/LogoutBtn/LogoutBtn';



const makeClassName=(isActive: boolean)=>{
        return cx({
            [styles.nav]: true,
            [styles.active]: isActive,

        })
}

const SideNav =()=>{

    const isAuthorized=useSelector(selectisAuthorized)

    return(
        <ul className={styles.list}>
            {!isAuthorized&&<NavLink to={routs.login} className={({isActive})=>makeClassName(isActive)}>Log-in</NavLink>}
            {!isAuthorized&&<NavLink to={routs.signup} className={({isActive})=>makeClassName(isActive)}>Sign-up</NavLink>}
            {isAuthorized&&<LogoutBtn/>}
        </ul>
    )

}

export default SideNav;