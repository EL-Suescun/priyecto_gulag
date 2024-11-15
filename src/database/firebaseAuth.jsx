import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC6nv-LWu5N0FDwB-PqMRHyVjo5BsN0IwY",
  authDomain: "gulag-af650.firebaseapp.com",
  projectId: "gulag-af650",
  storageBucket: "gulag-af650.firebasestorage.app",
  messagingSenderId: "12936543245",
  appId: "1:12936543245:web:599589cacb04a5cbd76944"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export default app;