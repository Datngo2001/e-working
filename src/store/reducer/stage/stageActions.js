import { LOAD_STAGE_FAILURE, LOAD_STAGE_SUCCESS } from "./stageActionTypes"
import { getAllProjectStage } from '../../../api/stage'
import { call, put } from "redux-saga/effects"

export function* loadAllProjectStage({ payload }) {
    try {
        const res = yield call(getAllProjectStage, payload)

        yield put({
            type: LOAD_STAGE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: LOAD_STAGE_FAILURE,
            payload: error
        })
    }
}