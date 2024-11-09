import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6nv-LWu5N0FDwB-PqMRHyVjo5BsN0IwY",
  authDomain: "gulag-af650.firebaseapp.com",
  projectId: "gulag-af650",
  storageBucket: "gulag-af650.firebasestorage.app",
  messagingSenderId: "12936543245",
  appId: "1:12936543245:web:599589cacb04a5cbd76944"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
