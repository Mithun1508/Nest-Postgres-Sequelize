/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTAt3T1N3gqJ19T2UVnOu_iV5tAuYfhdM",
    authDomain: "round-forge-406506.firebaseapp.com",
    projectId: "round-forge-406506",
    storageBucket: "round-forge-406506.appspot.com",
    messagingSenderId: "340158042303",
    appId: "1:340158042303:web:01f87ed5027bf263eef60a",
    measurementId: "G-LBH59TQE7X"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Obtain the auth object from Firebase

@Controller('auth')
export class AuthController {
  @Get('login')
  async login() {
    try {
      // Implement your authentication logic using Firebase
      const user = await signInWithEmailAndPassword(auth, 'mithun@sportshedge.io', 'root@123');
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
