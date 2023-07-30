import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0Y6LwzQyA5nFdEyvxN6kWgXJsSXRf5hs",
  authDomain: "email-authenticaion.firebaseapp.com",
  projectId: "email-authenticaion",
  storageBucket: "email-authenticaion.appspot.com",
  messagingSenderId: "1045931568311",
  appId: "1:1045931568311:web:f2e9a4e1ca46246ed27132",
};
const app = initializeApp(firebaseConfig);

export default app;
