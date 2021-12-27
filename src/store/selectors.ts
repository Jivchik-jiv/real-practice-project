

interface stateType{
    auth:{
        username: string,
        email: string,
        token: string,
        isFetching: boolean,
        isAuthorized: boolean,
        isError: boolean,
        errorMessage: string,
    }
    
  }

export const selectUserName=(state: stateType)=>state.auth.username;
export const selectisAuthorized=(state: stateType)=>state.auth.isAuthorized;