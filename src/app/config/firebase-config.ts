/** CONFIGURAÇÕES DE ACESSO AO FIREBASE */
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCDB1o0CIa8YChshfZQDux82aKKWMJ8dOY",
    authDomain: "gerenciador-d4417.firebaseapp.com",
    projectId: "gerenciador-d4417",
    storageBucket: "gerenciador-d4417.appspot.com",
    messagingSenderId: "774330766795",
    appId: "1:774330766795:web:84bafb09606180acbc524e",
    measurementId: "G-9JRBMXNGG1"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage)})


