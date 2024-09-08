// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYD8Vku0JV3Zu7zTKzUJK2VaMeWe1lTS8",
  authDomain: "bookstore-96772.firebaseapp.com",
  projectId: "bookstore-96772",
  storageBucket: "bookstore-96772.appspot.com",
  messagingSenderId: "870219002636",
  appId: "1:870219002636:web:33135800efd0359ccd8f29",
  measurementId: "G-52Q6VWB9GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app