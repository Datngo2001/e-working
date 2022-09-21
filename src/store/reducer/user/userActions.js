import { call, put } from 'redux-saga/effects'
import { SIGNIN_FAILURE, SIGNIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE, SIGNOUT_SUCCESS, SIGNOUT_FAILURE } from './userActionTypes'
import { signoutFirebase, createUserWithEmail, signInToFirebaseWithEmail, signinWithGooglePopup } from '../../../firebase/auth'

export function* signin({ payload }) {
    try {
        const googleRes = yield call(signInToFirebaseWithEmail, payload.email, payload.password)
        yield put({
            type: SIGNIN_SUCCESS,
            payload: {
                user: googleRes.user,
                idToken: googleRes._tokenResponse.idToken
            }
        })
    } catch (error) {
        yield put({
            type: SIGNIN_FAILURE,
            payload: error
        })
    }
}

export function* signinWithGoogle() {
    try {
        const googleRes = yield call(signinWithGooglePopup)

        if (!googleRes) {
            yield put({
                type: SIGNIN_FAILURE,
                payload: { message: "Please select your google account" }
            })
            return;
        }

        yield put({
            type: SIGNIN_SUCCESS,
            payload: {
                user: googleRes.user,
                idToken: googleRes._tokenResponse.idToken
            }
        })
    } catch (error) {
        yield put({
            type: SIGNIN_FAILURE,
            payload: error
        })
    }
}

export function* register({ payload }) {
    try {
        const googleRes = yield call(createUserWithEmail, payload.email, payload.password)
        yield put({
            type: REGISTER_SUCCESS,
            payload: {
                user: googleRes.user,
                idToken: googleRes._tokenResponse.idToken
            }
        })
    } catch (error) {
        yield put({
            type: REGISTER_FAILURE,
            payload: error
        })
    }
}

export function* signout() {
    try {
        yield call(signoutFirebase)
        yield put({
            type: SIGNOUT_SUCCESS,
        })
    } catch (error) {
        yield put({
            type: SIGNOUT_FAILURE,
            payload: error
        })
    }
}