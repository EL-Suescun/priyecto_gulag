import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6nv-LWu5N0FDwB-PqMRHyVjo5BsN0IwY",
  authDomain: "gulag-af650.firebaseapp.com",
  projectId: "gulag-af650",
  storageBucket: "gulag-af650.appspot.com",
  messagingSenderId: "12936543245",
  appId: "1:12936543245:web:599589cacb04a5cbd76944"
};

// Inicializa Firebase solo si no está inicializado
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa Firestore y Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
