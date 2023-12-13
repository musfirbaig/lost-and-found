// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAoSiihgq7JtUvhxstydJFvjuYnPMCl6lc",
  authDomain: "lost-and-found-f1cc2.firebaseapp.com",
  projectId: "lost-and-found-f1cc2",
  storageBucket: "lost-and-found-f1cc2.appspot.com",
  messagingSenderId: "161369389448",
  appId: "1:161369389448:web:9d338f6af52874a8a6e23d",
  measurementId: "G-XPGXJLEEBD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
