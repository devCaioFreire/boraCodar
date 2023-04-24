import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqHHcGklNNcwu8esEVjw7HxqksHZ7IRx4",
  authDomain: "backend-vertigo.firebaseapp.com",
  projectId: "backend-vertigo",
  storageBucket: "backend-vertigo.appspot.com",
  messagingSenderId: "87578871714",
  appId: "1:87578871714:web:076dd2accf07c89b3d54fb",
  measurementId: "G-Q6QVSKVHL6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);