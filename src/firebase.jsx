import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDaEaNBcGdEfFazxXAkNaO_p4UKJ8OyUGM",
    authDomain: "final-54d4a.firebaseapp.com",
    projectId: "final-54d4a",
    storageBucket: "final-54d4a.appspot.com",
    messagingSenderId: "614504973371",
    appId: "1:614504973371:web:3a501dd6e78973cc51881e"
};

const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
