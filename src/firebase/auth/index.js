import { getAuth, signOut, browserLocalPersistence, signInWithPopup, signInWithCustomToken, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, setPersistence } from "firebase/auth";
import { FirebaseApp } from "..";

export const auth = getAuth(FirebaseApp)

export function signInToFirebaseWithCustomToken(token) {
    return signInWithCustomToken(auth, token)
}

export function getFirebaseIdToken() {
    return auth.currentUser.getIdToken()
}

export function getCurrentUser() {
    return auth.currentUser
}

export async function signInToFirebaseWithEmail(email, password) {
    try {
        await setPersistence(auth, browserLocalPersistence)
        return signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
}

export async function createUserWithEmail(email, password) {
    try {
        await setPersistence(auth, browserLocalPersistence)
        return createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
}

export async function signinWithGooglePopup() {
    try {
        setPersistence(auth, browserLocalPersistence)
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider)
    } catch (error) {
        console.log(error)
    }
}

export function signoutFirebase() {
    return signOut(auth)
}