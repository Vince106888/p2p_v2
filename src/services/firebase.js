// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOybEgXfQX_tJx5dqg_OGzcrPcGBKq2gg",
  authDomain: "p2p-student-platform.firebaseapp.com",
  projectId: "p2p-student-platform",
  storageBucket: "p2p-student-platform.appspot.com",
  messagingSenderId: "23452791627",
  appId: "1:23452791627:web:de87fcbd0ba47949b9aece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally export initialized services if needed elsewhere
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
