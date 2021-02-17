import firebase from 'firebase/app';
import 'firebase/auth'

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyDlYntAT5Z6LPJW1ZaMRewI-fVRgLBPvE8",
    authDomain: "adhoc-10139.firebaseapp.com",
    projectId: "adhoc-10139",
    storageBucket: "adhoc-10139.appspot.com",
    messagingSenderId: "859218433700",
    appId: "1:859218433700:web:edcd4aaf20615caaa6f831",
})

export const auth = app.auth()
export default app