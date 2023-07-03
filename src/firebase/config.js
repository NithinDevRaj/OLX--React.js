import firebase from "firebase"
import "firebase/auth";
import "firebase/firebase"
import "firebase/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRd6pfB0DvV1fAikn62Rjw48A--q__qcA",
  authDomain: "olx-clone-8bfee.firebaseapp.com",
  projectId: "olx-clone-8bfee",
  storageBucket: "olx-clone-8bfee.appspot.com",
  messagingSenderId: "209048662361",
  appId: "1:209048662361:web:50c5301e5e8b70b5e35c48",
  measurementId: "G-K4HXPLT698"
};
export default firebase.initializeApp(firebaseConfig) 