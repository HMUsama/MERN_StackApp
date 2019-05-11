import {combineReducers} from 'redux'
import TodosReducer from './TodoReducer'



const rootReducers = combineReducers({
    todo:TodosReducer
});
export default  rootReducers;
