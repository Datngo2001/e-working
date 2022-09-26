import { LOAD_STAGE_FAILURE, LOAD_STAGE_REQUEST, LOAD_STAGE_SUCCESS } from "./stageActionTypes"

const init = {
    stages: [],
    currentStage: null,
    loading: false,
    error: {
        action: "",
        message: null
    }
}

export default function stageReducer(state = init, { type, payload }) {
    switch (type) {
        case LOAD_STAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: {
                    action: "",
                    message: null
                }
            }
        case LOAD_STAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    action: type,
                    message: payload
                }
            }
        case LOAD_STAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                stages: payload,
                error: {
                    action: "",
                    message: null
                }
            }

        default:
            return state
    }
}