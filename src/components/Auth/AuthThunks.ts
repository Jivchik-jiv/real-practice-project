import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from './AuthAPI';

type registerParamsType={
    name: string,
    email: string,
    password: string
};

type loginParamsType={
    email: string,
    password: string
};

const saveToSessionStorage=(token:string)=>{
    sessionStorage.setItem('auth', token);
};

export const register=createAsyncThunk('user/register', (params: registerParamsType)=>{
    return authApi.register(params)
    .then(response=>{
        saveToSessionStorage(response.token);
        return response})
    .catch(error=>{
        return error.message})
});

export const login=createAsyncThunk('user/login', (params: loginParamsType)=>{
    return authApi.login(params)
    .then(response=>{
        saveToSessionStorage(response.token);
        return response})
    .catch(error=>{
        return error.message})
});

export const logout=createAsyncThunk('user/logout', ()=>{
    return authApi.logout()
    .then(response=>{
        saveToSessionStorage('');
        return response})
    .catch(error=>{
        return error.message})
});

export const current=createAsyncThunk('user/current', (token:string)=>{
    return authApi.current(token)
    .then(response=>({...response, token}))
    .catch(error=>{
        return error.message})
});