//react-redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//reducers
import rootreducer from './reducers';
//state
const initialState = {};
//store
const middleware = [thunk];
// syntax :: createStore(reducer, initialState, middleware)
const store = createStore(rootreducer, initialState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;