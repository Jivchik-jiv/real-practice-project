import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../store/selectors';
import styles from './Profile.module.css';

const Profile=()=>{

    const name=useSelector(selectUserName);

    
    return(
        <div className={styles.profile}>
            <h1>Profile</h1>
            <p>Name: {name}</p>
        </div>
    )
}

export default Profile;