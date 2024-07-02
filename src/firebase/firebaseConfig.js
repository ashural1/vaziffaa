import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAPqms08xSoKe7mcAfhQus83yEWs84-zg",
  authDomain: "mykitchen-7c181.firebaseapp.com",
  projectId: "mykitchen-7c181",
  storageBucket: "mykitchen-7c181.appspot.com",
  messagingSenderId: "744041393147",
  appId: "1:744041393147:web:75158028ffb3fd19c0395e",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
