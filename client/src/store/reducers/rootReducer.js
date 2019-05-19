import {combineReducers} from 'redux'
import TodosReducer from './TodoReducer'
import ErrorReducer from './ErrorReducer'
import AuthReducer from './AuthReducer'



const rootReducers = combineReducers({
    todo: TodosReducer,
    error:ErrorReducer,
    auth: AuthReducer,
});
export default  rootReducers;
