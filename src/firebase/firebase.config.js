// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGN0C-3mveV33cBa3D6hvMzhU7yg0Y7iE",
  authDomain: "dragon-news-online-bfb39.firebaseapp.com",
  projectId: "dragon-news-online-bfb39",
  storageBucket: "dragon-news-online-bfb39.firebasestorage.app",
  messagingSenderId: "3605830593",
  appId: "1:3605830593:web:546f672b260ed1bf0ead40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;