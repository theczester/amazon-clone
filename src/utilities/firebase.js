import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOnbOv9Sre2BAl3FsT3ImY9mFT6Rp1dNI",
  authDomain: "clone-fc834.firebaseapp.com",
  databaseURL: "https://clone-fc834.firebaseio.com",
  projectId: "clone-fc834",
  storageBucket: "clone-fc834.appspot.com",
  messagingSenderId: "132106079757",
  appId: "1:132106079757:web:6e47de4bcb071a16658f44"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };