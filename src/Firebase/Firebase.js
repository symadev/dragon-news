// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg2c-8tPy9VwUYCQ3P3unCPzGJBabmGco",
  authDomain: "dragon-news-edb19.firebaseapp.com",
  projectId: "dragon-news-edb19",
  storageBucket: "dragon-news-edb19.firebasestorage.app",
  messagingSenderId: "407344636590",
  appId: "1:407344636590:web:443d8141933104e69dc33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export { app, auth };
