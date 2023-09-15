import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF7htfu1RljpK6LS6JU5xgPjlK94Gq_II",
  authDomain: "coderhoue-eccomerce.firebaseapp.com",
  projectId: "coderhoue-eccomerce",
  storageBucket: "coderhoue-eccomerce.appspot.com",
  messagingSenderId: "28944700656",
  appId: "1:28944700656:web:2c85d29f308fe741fd1e35",
  measurementId: "G-7E2DF8FKJZ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);