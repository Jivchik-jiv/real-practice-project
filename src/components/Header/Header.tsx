import * as React from 'react';
import styles from './Header.module.css'
import MainNav from '../MainNav/MainNav';
import SideNav from '../SideNav/SideNav';


const Header= ()=>{

    return (
        <header className={styles.header}>
            <div className={styles.navWrap}>
                <MainNav/>
                <SideNav/>
           </div>
        </header>
    )
};

export default Header;
