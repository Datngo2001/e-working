import { call, put } from "redux-saga/effects";
import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_SUCCESS, MY_PROJECT_FAILURE, MY_PROJECT_SUCCESS } from "./projectActionTypes";
import { postProject, getMyProject as getMyProjectApi } from '../../../api/project'


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

export function* getMyProject() {
    try {
        const res = yield call(getMyProjectApi)

        yield put({
            type: MY_PROJECT_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: MY_PROJECT_FAILURE,
            payload: error
        })
    }
}