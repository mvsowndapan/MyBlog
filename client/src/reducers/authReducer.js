import isEmpty from '../validation/isEmpty';
import { SET_CURRENT_USER } from '../actions/types';
const initialState = {
    isAuthunticated: false,
    user: {}
};
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthunticated: !isEmpty(action.payload),
                user: action.payload
            };

        default: return state;
    }
}