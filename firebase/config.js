import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyABZidqadsWTO6bc4cjv3lO_XNnP8qxhLY",
    authDomain: "fintechstop-4b416.firebaseapp.com",
    projectId: "fintechstop-4b416",
    storageBucket: "fintechstop-4b416.appspot.com",
    messagingSenderId: "425634832245",
    appId: "1:425634832245:web:63118c7ad4af75e2a7fd3c"
  };
  
  const app = initializeApp(firebaseConfig);