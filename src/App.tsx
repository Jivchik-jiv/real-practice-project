import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router';
import './App.css';
import About from './components/About/About';
import { current } from './components/Auth/AuthThunks';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import Contacts from './components/Contacts/Contacts';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Settings from './components/SettingsPage/Settings';
import routes from './routes'
import { selectisAuthorized } from './store/selectors';

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    let token=sessionStorage.getItem('auth');
    if(token){
      dispatch(current(token));
    }
  },[dispatch])

  const isAuthorized=useSelector(selectisAuthorized);

  let isReady=!sessionStorage.getItem('auth')||isAuthorized;

  return (
    <div className="App">
        {isReady&&<Layout>
          <Routes>
            <Route path={routes.main} element={<Main/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.signup} element={<PublicRoute component={Signup}/>}/>
            <Route path={routes.login} element={<PublicRoute component={Login}/>}/>
            <Route path={routes.profile} element={<PrivateRoute component={Profile}/>}/>
            <Route path={routes.settings} element={<PrivateRoute component={Settings}/>}/>
            <Route path={routes.contacts} element={<PrivateRoute component={Contacts}/>}/>
          </Routes>
        </Layout>}
    </div>
  );
}

export default App;
