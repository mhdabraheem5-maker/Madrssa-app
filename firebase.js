// ===== FIREBASE CONFIG =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJqSt1qLdDIJkwjuWL0vRnhj2bhmebwqc",
  authDomain: "islamic-center-app.firebaseapp.com",
  projectId: "islamic-center-app",
  storageBucket: "islamic-center-app.firebasestorage.app",
  messagingSenderId: "398750359604",
  appId: "1:398750359604:web:01791d08637dd598eb2a61"
};

const app    = initializeApp(firebaseConfig);
const db     = getFirestore(app);
const auth   = getAuth(app);
const storage = getStorage(app);

// ===== EXPORT =====
window.FB = { db, auth, storage, collection, addDoc, getDocs, deleteDoc,
              doc, updateDoc, serverTimestamp, ref, uploadBytes,
              getDownloadURL, deleteObject,
              signInWithEmailAndPassword, signOut, onAuthStateChanged };
