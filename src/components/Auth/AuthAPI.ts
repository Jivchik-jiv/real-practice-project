import axios from "axios"
 
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token={
    set(token:string){
        axios.defaults.headers.common.Authorization= `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization= ``;
    }
 }
 
 type credentialsType = {
     name?: string,
     email: string,
     password: string
 }


const authApi = {
    register(credentials: credentialsType){
       return axios.post("/users/signup", credentials)
       .then(response=>{
        token.set(response.data.token)
        return response.data
       })
       .catch(error=>error.message)
    },
    login(credentials: credentialsType){
        return axios.post("/users/login", credentials)
        .then(response=>{
            token.set(response.data.token)
            return response.data
           })
        .catch(error=>error )
    },
    logout(){
        return axios.post("/users/logout")
        .then(response=> {
            token.unset()
            return response.data
        })
        .catch(error=>error.message)
    },
    current(currentToken: string){
        token.set(currentToken)
        return axios.get("/users/current")
        .then(response=>response.data)}
}

export default authApi;