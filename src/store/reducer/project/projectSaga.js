import { takeLatest } from "redux-saga/effects";
import { CREATE_PROJECT_REQUEST, LOAD_PROJECT_REQUEST, MY_PROJECT_REQUEST } from "./projectActionTypes";
import { createProject, getMyProject, loadProject } from './projectActions'

export default function* watchProjectAction() {
    yield takeLatest(CREATE_PROJECT_REQUEST, createProject)
    yield takeLatest(MY_PROJECT_REQUEST, getMyProject)
    yield takeLatest(LOAD_PROJECT_REQUEST, loadProject)
}