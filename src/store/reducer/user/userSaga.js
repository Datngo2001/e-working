import { takeLatest } from "redux-saga/effects";
import { REGISTER_REQUEST, SIGNIN_GOOGLE_REQUEST, SIGNIN_REQUEST } from "./userActionTypes";
import { register, signin, signinWithGoogle } from "./userActions";

export default function* watchUserAction() {
    yield takeLatest(SIGNIN_REQUEST, signin)
    yield takeLatest(REGISTER_REQUEST, register)
    yield takeLatest(SIGNIN_GOOGLE_REQUEST, signinWithGoogle)
}