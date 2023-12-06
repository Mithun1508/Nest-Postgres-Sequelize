/* eslint-disable prettier/prettier */
// firebase.service.ts
import * as firebase from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBTAt3T1N3gqJ19T2UVnOu_iV5tAuYfhdM",
    authDomain: "round-forge-406506.firebaseapp.com",
    projectId: "round-forge-406506",
    storageBucket: "round-forge-406506.appspot.com",
    messagingSenderId: "340158042303",
    appId: "1:340158042303:web:01f87ed5027bf263eef60a",
    measurementId: "G-LBH59TQE7X"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
