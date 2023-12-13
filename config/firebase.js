// firebase.js
import {getApp, getApps, initializeApp} from 'firebase/app';
// import 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAoSiihgq7JtUvhxstydJFvjuYnPMCl6lc",
  authDomain: "lost-and-found-f1cc2.firebaseapp.com",
  projectId: "lost-and-found-f1cc2",
  storageBucket: "lost-and-found-f1cc2.appspot.com",
  messagingSenderId: "161369389448",
  appId: "1:161369389448:web:9d338f6af52874a8a6e23d",
  measurementId: "G-XPGXJLEEBD"
};

const app = getApps().length ? getApps() : initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth}