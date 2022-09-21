import { takeLatest } from "redux-saga/effects";
import { CREATE_PROJECT_REQUEST, MY_PROJECT_REQUEST } from "./projectActionTypes";
import { createProject, getMyProject } from './projectActions'

export default function* watchProjectAction() {
    yield takeLatest(CREATE_PROJECT_REQUEST, createProject)
    yield takeLatest(MY_PROJECT_REQUEST, getMyProject)
}