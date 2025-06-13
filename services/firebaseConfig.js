import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd5NK3I5XCnon0GwWYqnlTieo96Uzt_5Q",
  authDomain: "ecommerce-643a5.firebaseapp.com",
  projectId: "ecommerce-643a5",
  storageBucket: "ecommerce-643a5.firebasestorage.app",
  messagingSenderId: "213832679151",
  appId: "1:213832679151:web:a00e3dd9a6a9a2f572651a",
  measurementId: "G-5X0S1GS0X3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
