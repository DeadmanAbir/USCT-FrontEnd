// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT_Q_4FuFSAzypiLRi097_d47KIr-F9DI",
  authDomain: "usct-d05ab.firebaseapp.com",
  projectId: "usct-d05ab",
  storageBucket: "usct-d05ab.appspot.com",
  messagingSenderId: "1000367969675",
  appId: "1:1000367969675:web:0d9261434fcdc97efc8b8e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth, app};