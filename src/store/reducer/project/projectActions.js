import { call, put } from "redux-saga/effects";
import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_SUCCESS, LOAD_PROJECT_FAILURE, LOAD_PROJECT_SUCCESS, MY_PROJECT_FAILURE, MY_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE, UPDATE_PROJECT_SUCCESS } from "./projectActionTypes";
import { postProject, getMyProject as getMyProjectApi, getProjectById, putProject } from '../../../api/project'


export function* createProject({ payload }) {
    try {
        const res = yield call(postProject, payload.data)
        payload.success(res.data)
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

export function* loadProject({ payload }) {
    try {
        const res = yield call(getProjectById, payload)

        yield put({
            type: LOAD_PROJECT_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: LOAD_PROJECT_FAILURE,
            payload: error
        })
    }
}

export function* editProject({ payload }) {
    try {
        const res = yield call(putProject, payload.id, payload.data)

        yield put({
            type: UPDATE_PROJECT_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: UPDATE_PROJECT_FAILURE,
            payload: error
        })
    }
}