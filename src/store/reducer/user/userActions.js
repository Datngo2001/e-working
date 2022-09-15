import { call, put } from 'redux-saga/effects'
// import { verifyIdToken } from '../../../api/auth'
import { SIGNIN_FAILURE, SIGNIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE } from './userActionTypes'
import { createUserWithEmail, signInToFirebaseWithEmail, signinWithGooglePopup } from '../../../firebase/auth'

export function* signin({ payload }) {
    try {
        const googleRes = yield call(signInToFirebaseWithEmail, payload.email, payload.password)
        yield put({
            type: SIGNIN_SUCCESS,
            payload: {
                user: googleRes.user,
                accessToken: googleRes.user.accessToken,
                idToken: googleRes._tokenResponse.idToken,
                refreshToken: googleRes._tokenResponse.refreshToken
            }
        })
    } catch (error) {
        console.log(error)
        yield put({
            type: SIGNIN_FAILURE,
            payload: error
        })
    }
}

export function* signinWithGoogle() {
    try {
        const googleRes = yield call(signinWithGooglePopup)
        yield put({
            type: SIGNIN_SUCCESS,
            payload: {
                user: googleRes.user,
                accessToken: googleRes.user.accessToken,
                idToken: googleRes._tokenResponse.idToken,
                refreshToken: googleRes._tokenResponse.refreshToken
            }
        })
    } catch (error) {
        console.log(error)
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
                accessToken: googleRes.user.accessToken,
                idToken: googleRes._tokenResponse.idToken,
                refreshToken: googleRes._tokenResponse.refreshToken
            }
        })
    } catch (error) {
        yield put({
            type: REGISTER_FAILURE,
            payload: error
        })
    }
}
