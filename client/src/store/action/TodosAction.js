import axios from 'axios'
import { GET_TODOS,ADD_TODOS,DELETE_TODOS ,TODOS_LOADING} from '../const/types'

export const getTodos =()=> dispatch =>{
   dispatch(setTodosLoading());
   axios.get('./api/items')
   .then(res=>
    dispatch({
        type:GET_TODOS,
        payload:res.data
    })
    )
};
export const addTodos =(todo)=>dispatch=>{
    axios.post('/api/items',todo)
    .then(res=>
        dispatch({
            type:ADD_TODOS,
            payload :res.data
        })
        )
};

export const deleteTodos =(id)=>dispatch=>{
    axios.delete(`/api/items/${id}`).then(res=>
        dispatch({
            type:DELETE_TODOS,
            payload:id
        })
    );
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
