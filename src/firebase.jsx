import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSDHC4oqZVkC4LPxNVvlFhWrqGtInRekA",
  authDomain: "facebook-clone-82d1b.firebaseapp.com",
  projectId: "facebook-clone-82d1b",
  storageBucket: "facebook-clone-82d1b.appspot.com",
  messagingSenderId: "216975028999",
  appId: "1:216975028999:web:31a7fe5cbdd865455e4ba2",
  measurementId: "G-2BE5J7C109",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
