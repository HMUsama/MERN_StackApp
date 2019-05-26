import axios from 'axios'
import { GET_TODOS,ADD_TODOS,DELETE_TODOS ,TODOS_LOADING} from '../const/types'
import { tokenConfig } from './AuthAction'
import { returError } from './ErrorAction'

export const getTodos =()=> dispatch =>{
   dispatch(setTodosLoading());
   axios.get('./api/items')
   .then(res=>
    dispatch({
        type:GET_TODOS,
        payload:res.data
    })
    )
    .catch(error =>dispatch(returError(error.response.data,error.response.status)))
};
export const addTodos =(todo)=>(dispatch,getState)=>{
    debugger
    axios.post('/api/items',todo,tokenConfig(getState))
    .then(res=>
        dispatch({
            type:ADD_TODOS,
            payload :res.data
        })
        )
   .catch(error =>dispatch(returError(error.response.data,error.response.status)))

};

export const deleteTodos =(id)=>(dispatch,getState)=>{
    axios.delete(`/api/items/${id}`,tokenConfig(getState)).then(res=>
        dispatch({
            type:DELETE_TODOS,
            payload:id
        })
    )
    .catch(error =>dispatch(returError(error.response.data,error.response.status)))
};

export const setTodosLoading =(id)=>{
    console.log("setTodosLoading")
    return {
        type:TODOS_LOADING,
        payload :id
    };
};


//   before mongodb connection code
// export const deleteTodos =(id)=>{
//     return {
//         type:DELETE_TODOS,
//         payload :id
//     };
// };
// export const addTodos =(id)=>{
//     return {
//         type:ADD_TODOS,
//         payload :id
//     };
// };
