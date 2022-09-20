import { takeLatest } from "redux-saga/effects";
import { CREATE_PROJECT_REQUEST } from "./projectActionTypes";
import { createProject } from './projectActions'

export default function* watchProjectAction() {
    yield takeLatest(CREATE_PROJECT_REQUEST, createProject)
}