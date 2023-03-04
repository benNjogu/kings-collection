import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import "firebase/compat/database";
//import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyDlcpJSR2Dej11Gp63HdzE0dIC4HyfOfr8",
  authDomain: "kings-collection-8aa88.firebaseapp.com",
  projectId: "kings-collection-8aa88",
  storageBucket: "kings-collection-8aa88.appspot.com",
  messagingSenderId: "992268957689",
  appId: "1:992268957689:web:de4be0b3a6c44841482f28",
  measurementId: "G-XNWJ9B6M42",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //trigger google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;