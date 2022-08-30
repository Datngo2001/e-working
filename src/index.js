import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from './store'
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCV9wUlrqUhZc4ODJoqT0yWppyymNM9VvQ",
    authDomain: "e-working-ac680.firebaseapp.com",
    projectId: "e-working-ac680",
    storageBucket: "e-working-ac680.appspot.com",
    messagingSenderId: "1052923549521",
    appId: "1:1052923549521:web:bb26575ff84f1cff546570",
    measurementId: "G-F1GWRJ2YR8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);