// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeNNhtMk-ck4_Q75zcDsJdWbyLmeGCSTI",
  authDomain: "cross-platform-demo-5539b.firebaseapp.com",
  projectId: "cross-platform-demo-5539b",
  storageBucket: "cross-platform-demo-5539b.appspot.com",
  messagingSenderId: "344080016050",
  appId: "1:344080016050:web:0519f607a4ba97b033dfab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
