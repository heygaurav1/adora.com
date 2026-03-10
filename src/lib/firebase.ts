import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZpzt6FK22qbdHn8GsnmNSUeTNq0N6ReY",
  authDomain: "adora-107c8.firebaseapp.com",
  projectId: "adora-107c8",
  storageBucket: "adora-107c8.firebasestorage.app",
  messagingSenderId: "302552876437",
  appId: "1:302552876437:web:d137deb39360e6d3dba29c",
  measurementId: "G-Q3F49FNTKF"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics conditionally (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then(yes => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, auth, db, analytics };
