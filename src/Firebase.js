import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "@firebase/database";


  const firebaseConfig = {
    apiKey: "AIzaSyCFG_eGBx8b_GGNQ4XwXgiZ7--VDjHyBkY",
    authDomain: "communication-prot.firebaseapp.com",
    databaseURL: "https://communication-prot-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "communication-prot",
    storageBucket: "communication-prot.appspot.com",
    messagingSenderId: "582930981604",
    appId: "1:582930981604:web:cc326e92abd6fd5d3a02f1"
  };

  /// Initialize Firebase
export default initializeApp(firebaseConfig);
export const analytics = getAnalytics();
export const auth = getAuth();
export const db = getFirestore();
export const rdb = getDatabase();