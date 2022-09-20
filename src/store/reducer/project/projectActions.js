import { call, put } from "redux-saga/effects";
import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_SUCCESS } from "./projectActionTypes";
import { postProject } from '../../../api/project'


export function* createProject({ payload }) {
    try {
        const res = yield call(postProject, payload)
        yield put({
            type: CREATE_PROJECT_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: CREATE_PROJECT_FAILURE,
            payload: error
        })
    }
}