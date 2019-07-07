import { combineReducers } from 'redux';
import auth from './authReducer';
import err from './errReducer';
export default combineReducers({
    auth: auth,
    err: err
})