import { takeEvery, takeLatest } from 'redux-saga/effects'
import { loadAllProjectStage, updateStageStartDate } from './stageActions'
import { LOAD_STAGE_REQUEST, STAGE_STARTDATE_UPDATE_REQUEST } from './stageActionTypes'

export default function* watchStageAction() {
    yield takeLatest(LOAD_STAGE_REQUEST, loadAllProjectStage)
    yield takeEvery(STAGE_STARTDATE_UPDATE_REQUEST, updateStageStartDate)
}