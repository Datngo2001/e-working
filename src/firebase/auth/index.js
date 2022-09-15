import { getAuth, signInWithPopup, signInWithCustomToken, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

export function signInToFirebaseWithCustomToken(token) {
    const auth = getAuth()
    return signInWithCustomToken(auth, token)
}

export function getFirebaseIdToken() {
    const auth = getAuth()
    return auth.currentUser.getIdToken()
}

export function signInToFirebaseWithEmail(email, password) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
}

export function createUserWithEmail(email, password) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signinWithGooglePopup() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
}
