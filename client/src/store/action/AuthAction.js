import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
}   from '../const/types'
import axios from 'axios'
import {returError} from './ErrorAction'


// check token & load user
export const loadUser = ()=>( dispatch,getState ) =>{
    // User Loading
    dispatch({type:USER_LOADING});
    // Get Token from localstorage
    const token = getState().auth.token;
    // Headers
    const config ={
        headers :{ "Content-type":"application/json"  }
    }
    // if token , add to headers
    if(token){
        config.headers['x-auth-token'] = token;
    }
    // axios.get('/api/auth/user',config) after tokenConfig function
    axios.get('/api/auth/user',tokenConfig(getState))
    .then(res=>dispatch({
        type:USER_LOADED,
        payload:res.data
    }))
    .catch(error=>{
        dispatch(returError(error.response.data,error.response.status));
        dispatch({
            type:AUTH_ERROR,
        })
    })
}

// Setup config
export const tokenConfig = getState =>{
     // Get Token from localstorage
     const token = getState().auth.token;
     // Headers
     const config ={
         headers :{ "Content-type":"application/json"  }
     }
     // if token , add to headers
     if(token){
         config.headers['x-auth-token'] = token;
     }

     return config;
}