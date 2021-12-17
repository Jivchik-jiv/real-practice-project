import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';
import './App.css';
import About from './components/About/About';
import { current } from './components/Auth/AuthThunks';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import routes from './routes'

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    let token=sessionStorage.getItem('auth');
    if(token){
      dispatch(current(token));
    }
  },[])

  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path={routes.main} element={<Main/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.signup} element={<PublicRoute component={Signup}/>}/>
            <Route path={routes.login} element={<PublicRoute component={Login}/>}/>
            <Route path={routes.profile} element={<PrivateRoute component={Profile}/>}/>
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
