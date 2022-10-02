import { LOAD_STAGE_FAILURE, LOAD_STAGE_REQUEST, LOAD_STAGE_SUCCESS } from "./stageActionTypes"

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
                loading: true,
                error: {
                    action: "",
                    message: null
                }
            }
        case LOAD_STAGE_FAILURE:
            return {
                ...state,
                stages: [],
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

        default:
            return state
    }
}