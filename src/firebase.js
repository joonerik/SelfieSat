import firebase from "firebase/app"
import "firebase/firebase-firestore"
import "firebase/storage"

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAqL3r5lw2LXuqfzZGauxis9_oXCnuDkPM",
    authDomain: "selfie-sat.firebaseapp.com",
    databaseURL: "https://selfie-sat.firebaseio.com",
    projectId: "selfie-sat",
    storageBucket: "selfie-sat.appspot.com",
    messagingSenderId: "925221973200",
    appId: "1:925221973200:web:e70251834eacad509a02d5",
    measurementId: "G-NBHLR78NL8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export  {
    storage, firebase as default
  }