import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, LOAD_PROJECT_FAILURE, LOAD_PROJECT_REQUEST, LOAD_PROJECT_SUCCESS, MY_PROJECT_FAILURE, MY_PROJECT_REQUEST, MY_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS } from "./projectActionTypes";

const init = {
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
        case UPDATE_PROJECT_REQUEST:
        case LOAD_PROJECT_REQUEST:
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
        case UPDATE_PROJECT_FAILURE:
        case LOAD_PROJECT_FAILURE:
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
                currentProject: payload,
                projectList: [...state.projectList, payload],
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
        case LOAD_PROJECT_SUCCESS:
            return {
                ...state,
                currentProject: payload,
                loading: false,
                error: {
                    action: "",
                    message: null
                }
            }
        case UPDATE_PROJECT_SUCCESS:
            console.log(payload)
            return {
                ...state,
                currentProject: payload,
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

// function updateProjectInStore(projectList, newProject) {
//     const index = projectList.findIndex(stage => stage._id == newProject._id)
//     projectList[index] = newProject
//     return projectList
// }
