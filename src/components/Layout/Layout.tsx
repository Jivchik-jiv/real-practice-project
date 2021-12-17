import * as React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

type Props={
    children?: JSX.Element|JSX.Element[]
}

const Layout=({children}: Props)=>{

    return <>
        <Header/>
        <main className={styles.mainWrap}>
            {children}
        </main>

    </>
}

export default Layout;

