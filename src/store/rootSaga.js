import { all } from "redux-saga/effects";
import watchProjectAction from "./reducer/project/projectSaga";
import watchStageAction from "./reducer/stage/stageSaga";
import watchUserAction from "./reducer/user/userSaga";

export default function* rootSaga() {
    yield all([watchUserAction(), watchProjectAction(), watchStageAction()])
}