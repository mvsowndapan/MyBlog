import axios from 'axios';
//types
import { GET_ERRORS, SET_CURRENT_USER } from '../actions/types';
//utils
import { setAuthToken } from '../utils/setAuthToken';
//jwt decode
import jwt_decode from 'jwt-decode';
import { decode } from 'punycode';

//register
export const registerUser = (userData, history) => async dispatch => {
    try {
        await axios.post('/user/register', userData);
        history.push('/login');
    }
    catch (err) { dispatch({ type: GET_ERRORS, payload: err.response.data }) }
};

//login
export const loginUser = (userData) => async dispatch => {
    try {
        let user = await axios.post('/user/login', userData);
        let { token } = user.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        let decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    }
    catch (err) { dispatch({ type: GET_ERRORS, payload: err.response.data }) }
}

//setCurrentUser
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//logout
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}