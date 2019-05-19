import {GET_ERROR,CLEAR_ERROR } from '../const/types'
import axios from 'axios'

// Rreturn Error 
export const returError = (msg,status,id=null)=>{
    return {
        type:GET_ERROR,
        payload:{msg,status,id}
    }
}
// Clear Error 
export const clearError = ()=>{
    return {
        type:CLEAR_ERROR,
    }
}