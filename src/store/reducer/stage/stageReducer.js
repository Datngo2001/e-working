import { CLEAR_STAGES, CREATE_STAGE_FAILURE, CREATE_STAGE_REQUEST, CREATE_STAGE_SUCCESS, LOAD_STAGE_FAILURE, LOAD_STAGE_REQUEST, LOAD_STAGE_SUCCESS, STAGE_ENDDATE_UPDATE_FAILURE, STAGE_ENDDATE_UPDATE_REQUEST, STAGE_ENDDATE_UPDATE_SUCCESS, STAGE_STARTDATE_UPDATE_FAILURE, STAGE_STARTDATE_UPDATE_REQUEST, STAGE_STARTDATE_UPDATE_SUCCESS } from "./stageActionTypes"

const init = {
    ganttChart: {
        mode: 'week',
        startColumnAt: 2,
        dateRowAt: 1,
        stageRowAt: 3,
        startDate: null,
        endDate: null,
        totalDate: null
    },
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
                stages: [],
                currentStage: null,
                loading: true,
                error: {
                    action: "",
                    message: null
                }
            }
        case CREATE_STAGE_REQUEST:
        case STAGE_STARTDATE_UPDATE_REQUEST:
        case STAGE_ENDDATE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: {
                    action: "",
                    message: null
                }
            }
        case LOAD_STAGE_FAILURE:
        case CREATE_STAGE_FAILURE:
        case STAGE_STARTDATE_UPDATE_FAILURE:
        case STAGE_ENDDATE_UPDATE_FAILURE:
            return {
                ...state,
                currentStage: null,
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
                stages: payload.stages,
                ganttChart: {
                    ...state.ganttChart,
                    startDate: payload.ganttChart.startDate,
                    endDate: payload.ganttChart.endDate,
                    totalDate: payload.ganttChart.totalDate,
                },
                currentStage: null,
                error: {
                    action: "",
                    message: null
                }
            }
        case STAGE_STARTDATE_UPDATE_SUCCESS:
        case STAGE_ENDDATE_UPDATE_SUCCESS:
            return {
                ...state,
                stages: updateStageInStore(state.stages, payload),
                error: {
                    action: "",
                    message: null
                }
            }
        case CREATE_STAGE_SUCCESS:
            return {
                ...state,
                stages: addStageToStore(state.stages, payload),
                error: {
                    action: "",
                    message: null
                }
            }
        case CLEAR_STAGES:
            return { ...init }
        default:
            return state
    }
}

function updateStageInStore(stages, newStage) {
    const index = stages.findIndex(stage => stage._id == newStage._id)
    stages[index] = newStage
    return stages
}

function addStageToStore(stages, newStage) {
    stages.push(newStage)
    return stages
}