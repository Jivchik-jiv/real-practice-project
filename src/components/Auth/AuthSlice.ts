import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { current, login, logout, register } from "./AuthThunks";

interface stateType{
  username: string,
  email: string,
  token: string,
  isFetching: boolean,
  isAuthorized: boolean,
  isError: boolean,
  errorMessage: string,
}


const initialState={
  username: "",
  email: "",
  token:"",
  isFetching: false,
  isAuthorized: false,
  isError: false,
  errorMessage: "",
} as stateType;

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      clearAuth(state){
        state.isError = false;
        state.isFetching=false;
        state.isAuthorized=false;
      }
    },
    extraReducers: (builder)=>{
      builder
      .addCase(register.pending, (state)=>{
        state.isFetching=true;
      })
      .addCase(register.fulfilled, (state, {payload})=>{
        state.isFetching=false;
        state.isAuthorized=true;
        state.email= payload.user.email;
        state.username=payload.user.name;
        state.token=payload.token;

      })
      .addCase(register.rejected, (state,{payload})=>{
        state.isError=true;
        state.isFetching=false;
      })
      .addCase(login.pending, (state)=>{
        state.isFetching=true;
      })
      .addCase(login.fulfilled, (state, {payload})=>{
        state.isFetching=false;
        state.isAuthorized=true;
        state.email= payload.user.email;
        state.username=payload.user.name;
        state.token=payload.token;

      })
      .addCase(login.rejected, (state,{payload})=>{
        state.isError=true;
        state.isFetching=false;
      })
      .addCase(logout.pending, (state)=>{
        state.isFetching=true;
      })
      .addCase(logout.fulfilled, (state)=>{
        state.isFetching=false;
        state.isAuthorized=false;
        state.email= "";
        state.username="";
        state.token="";

      })
      .addCase(logout.rejected, (state)=>{
        state.isError=true;
        state.isFetching=false;
      })
      .addCase(current.pending, (state)=>{
        state.isFetching=true;
      })
      .addCase(current.fulfilled, (state, {payload})=>{
        debugger;
        state.isFetching=false;
        state.isAuthorized=true;
        state.email= payload.email;
        state.username=payload.name;
        state.token=payload.token;

      })
      .addCase(current.rejected, (state,{payload})=>{
        state.isError=true;
        state.isFetching=false;
      })
      .addDefaultCase((state, action) => {})
    },
    
  })

  export const { clearAuth } = authSlice.actions;

  export const authSelector=(state:{auth:stateType})=>state.auth;




  // let user2={
//     "name": "Bob bob",
//     "email": "yuyuy@asd.com",
//     "password": "11111111"
//   };

//   let user1 = {
//     "name": "Adrian Cross",
//     "email": "xxxxx@ddd.com",
//     "password": "1111111"
//   };

//   let user3 ={
//       name: "Gggg",
//       email: "jiv@faik.com",
//       password: "33333333"
//   }