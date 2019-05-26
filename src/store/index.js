import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers/rootReducer'

const initialState = {}
const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOL_EXTENSION__ && window.___REDUX_DEVTOOL_EXTENSION__()
    )
);
export default store;