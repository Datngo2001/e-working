import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, MY_PROJECT_FAILURE, MY_PROJECT_REQUEST, MY_PROJECT_SUCCESS } from "./projectActionTypes";

const init = {
    newProject: null,
    projectList: [],
    currentProject: null,
    loading: false,
    error: {
        action: "",
        message: null
    }
}

export default function projectReducer(state = init, { type, payload }) {
    switch (type) {
        case CREATE_PROJECT_REQUEST:
        case MY_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: {
                    action: "",
                    message: null
                }
            }
        case CREATE_PROJECT_FAILURE:
        case MY_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    action: type,
                    message: payload
                }
            }
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                newProject: null,
                currentProject: payload,
                loading: false,
                error: {
                    action: "",
                    message: null
                }
            }
        case MY_PROJECT_SUCCESS:
            return {
                ...state,
                projectList: payload,
                loading: false,
                error: {
                    action: "",
                    message: null
                }
            }
        default:
            return state
    }
}