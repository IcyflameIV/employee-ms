import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, getStorage} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa5FarW0jhrgLwRLXvWCAOIgtvNIytjOY",
  authDomain: "new-project-3a79c.firebaseapp.com",
  projectId: "new-project-3a79c",
  storageBucket: "new-project-3a79c.appspot.com",
  messagingSenderId: "425735846146",
  appId: "1:425735846146:web:8f8829a8a156609b4f6a1b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db = getFirestore(app);

