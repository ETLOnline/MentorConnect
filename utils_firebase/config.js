import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7rnsdx2jSiHFArTSDU3HfW3ZWakY_IeA",
  authDomain: "blogs-e8354.firebaseapp.com",
  projectId: "blogs-e8354",
  storageBucket: "blogs-e8354.appspot.com",
  messagingSenderId: "138709189791",
  appId: "1:138709189791:web:b6289f9518f47eeb444eaa",
};
// init firebase
// firebase.initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//  init firestore
const fireStore = firebase.firestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { fireStore, auth, googleProvider};
