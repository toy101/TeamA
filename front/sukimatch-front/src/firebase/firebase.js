// Author Makoto Shiraishi

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZVqFfWYUaRK4hUvypjWF3DzkLTdn3U44",
  authDomain: "sukimatch-21753.firebaseapp.com",
  databaseURL: "https://sukimatch-21753.firebaseio.com",
  projectId: "sukimatch-21753",
  storageBucket: "sukimatch-21753.appspot.com",
  messagingSenderId: "162386429266",
  appId: "1:162386429266:web:9c7256ae9d7a231c6f268b",
  measurementId: "G-2698PD0QWJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();