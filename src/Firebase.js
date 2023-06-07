import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "hotel-booking-app-13425.firebaseapp.com",
  projectId: "hotel-booking-app-13425",
  storageBucket: "hotel-booking-app-13425.appspot.com",
  messagingSenderId: "605880851535",
  appId: "1:605880851535:web:275dc413e3be973cf1de3a",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
