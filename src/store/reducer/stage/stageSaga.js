import { takeLatest } from 'redux-saga/effects'
import { loadAllProjectStage } from './stageActions'
import { LOAD_STAGE_REQUEST } from './stageActionTypes'

export default function* watchStageAction() {
    yield takeLatest(LOAD_STAGE_REQUEST, loadAllProjectStage)
}