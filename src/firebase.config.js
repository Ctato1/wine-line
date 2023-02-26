import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyB_NVkqVayKRD9dkqH2eTAP6YNA2pl1JSI",
  authDomain: "wineline-a9772.firebaseapp.com",
  projectId: "wineline-a9772",
  storageBucket: "wineline-a9772.appspot.com",
  messagingSenderId: "748692445849",
  appId: "1:748692445849:web:873d6d3e64a18d183ff608",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
