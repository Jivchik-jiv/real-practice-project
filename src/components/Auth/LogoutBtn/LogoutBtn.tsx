import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../AuthThunks';

const LogoutBtn=()=>{
    const dispatch=useDispatch();

    const handleLogout=()=>{
        dispatch(logout())
    }

    return(
        <button type="button" onClick={handleLogout}>Logout</button>
    )
}

export default LogoutBtn;