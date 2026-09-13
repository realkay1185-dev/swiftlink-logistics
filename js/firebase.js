// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKpGiSHTkD0XMwWBmIpChBQM9AJqMvSQs",
  authDomain: "swiftlink-logistics-de053.firebaseapp.com",
  projectId: "swiftlink-logistics-de053",
  storageBucket: "swiftlink-logistics-de053.firebasestorage.app",
  messagingSenderId: "831490909055",
  appId: "1:831490909055:web:800ae724c5073d2121b04a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore Database
const db = firebase.firestore();
