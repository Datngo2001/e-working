import { takeLatest } from "redux-saga/effects";
import { REGISTER_REQUEST, SIGNIN_GOOGLE_REQUEST, SIGNIN_REQUEST, SIGNOUT_REQUEST } from "./userActionTypes";
import { register, signin, signinWithGoogle, signout } from "./userActions";

export default function* watchUserAction() {
    yield takeLatest(SIGNIN_REQUEST, signin)
    yield takeLatest(REGISTER_REQUEST, register)
    yield takeLatest(SIGNIN_GOOGLE_REQUEST, signinWithGoogle)
    yield takeLatest(SIGNOUT_REQUEST, signout)
}