// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsHO5pvoTjPt9aU8IEyLuUkRvVJqEF7ls",
  authDomain: "prabhanjan-d3405.firebaseapp.com",
  projectId: "prabhanjan-d3405",
  storageBucket: "prabhanjan-d3405.firebasestorage.app",
  messagingSenderId: "523715241703",
  appId: "1:523715241703:web:272e0e27d122cf2086e442",
  measurementId: "G-Q34YEC276R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);
export { db };
