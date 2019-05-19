// import uuid from 'uuid'
import { GET_TODOS,ADD_TODOS,DELETE_TODOS,TODOS_LOADING } from '../const/types'

const initialState = {
        todos:[],
        loading :false
}
export default function(state = initialState,action){
    switch(action.type){
        case GET_TODOS:
        console.log("Add Todos")
        return{
            ...state,
            todos:action.payload,
            loading:false
        }

        case ADD_TODOS:
        console.log("Add Todos",action.payload);
        return {
            ...state,
            todos:[action.payload, ...state.todos]
        }

        case DELETE_TODOS:
        console.log("Delete Todos");
        return {
            ...state,
            // todos:state.todos.filter(todo => todo.id !== action.payload) //after db connection
            todos:state.todos.filter(todo => todo._id !== action.payload)
        }
     
        case TODOS_LOADING:
        console.log("Loading Todos");
        return {
            ...state,
            loading :true
        }
        default:
        return state;
    }
}
