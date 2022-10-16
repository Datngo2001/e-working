import { takeEvery, takeLatest } from 'redux-saga/effects'
import { createNewStage, loadAllProjectStage, updateStageEndDate, updateStageStartDate } from './stageActions'
import { CREATE_STAGE_REQUEST, LOAD_STAGE_REQUEST, STAGE_ENDDATE_UPDATE_REQUEST, STAGE_STARTDATE_UPDATE_REQUEST } from './stageActionTypes'

export default function* watchStageAction() {
    yield takeLatest(LOAD_STAGE_REQUEST, loadAllProjectStage)
    yield takeEvery(STAGE_STARTDATE_UPDATE_REQUEST, updateStageStartDate)
    yield takeEvery(STAGE_ENDDATE_UPDATE_REQUEST, updateStageEndDate)
    yield takeLatest(CREATE_STAGE_REQUEST, createNewStage)
}