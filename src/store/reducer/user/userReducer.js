import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RESTORE_USER_FAILURE, RESTORE_USER_REQUEST, RESTORE_USER_SUCCESS, SIGNIN_FAILURE, SIGNIN_GOOGLE_REQUEST, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "./userActionTypes";

const init = {
    user: null,
    loading: true,
    idToken: null,
    error: {
        action: "",
        message: null
    }
}

export default function userReducer(state = init, { type, payload }) {
    switch (type) {
        case RESTORE_USER_REQUEST:
        case SIGNIN_GOOGLE_REQUEST:
        case SIGNIN_REQUEST:
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                user: null,
                error: {
                    action: "",
                    message: null
                }
            };
        case RESTORE_USER_FAILURE:
        case REGISTER_FAILURE:
        case SIGNIN_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: {
                    action: type,
                    message: payload
                }
            };
        case SIGNIN_SUCCESS:
        case REGISTER_SUCCESS:
        case RESTORE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload.user,
                idToken: payload.idToken,
                error: {
                    action: "",
                    message: null
                }
            };
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null,
                idToken: null,
                error: {
                    action: "",
                    message: null
                }
            };
        default:
            return state;
    }
}