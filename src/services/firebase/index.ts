import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0F0q7F7B4W5--2mrxMuwu6QEKyzsjhLU",
  authDomain: "check-mate-c1a87.firebaseapp.com",
  projectId: "check-mate-c1a87",
  storageBucket: "check-mate-c1a87.appspot.com",
  messagingSenderId: "153492268794",
  appId: "1:153492268794:web:2a5d5bb0d79574cf6a8b43",
  measurementId: "G-3Y53MF1E2P",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
