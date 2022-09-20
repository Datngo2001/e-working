import { all } from "redux-saga/effects";
import watchProjectAction from "./reducer/project/projectSaga";
import watchUserAction from "./reducer/user/userSaga";

export default function* rootSaga() {
    yield all([watchUserAction(), watchProjectAction()])
}