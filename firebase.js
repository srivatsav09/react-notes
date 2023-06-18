
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3QJlcGPnyj5kDRjxL4gx9cfBfez9dhoA",
  authDomain: "react-notes-757c2.firebaseapp.com",
  projectId: "react-notes-757c2",
  storageBucket: "react-notes-757c2.appspot.com",
  messagingSenderId: "820599320028",
  appId: "1:820599320028:web:c2ca595940d22805b3f319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
