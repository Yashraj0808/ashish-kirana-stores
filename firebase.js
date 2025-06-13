// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6ESBH4HR7BWQ8814iuEAGORR1rWxd9TA",
  authDomain: "ashish-general-store.firebaseapp.com",
  projectId: "ashish-general-store",
  storageBucket: "ashish-general-store.appspot.com",
  messagingSenderId: "483265427829",
  appId: "1:483265427829:web:6b61fb1b3f661b8dffbb3c",
  measurementId: "G-1FW7VCCXXM"
};

const app = initializeApp(firebaseConfig);

// Export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
