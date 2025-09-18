// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAVnbRIgg9fyj2pRzlAda_BQvA_afdoELg',
  authDomain: 'week7-stephanie.firebaseapp.com',
  projectId: 'week7-stephanie',
  storageBucket: 'week7-stephanie.firebasestorage.app',
  messagingSenderId: '1098472468577',
  appId: '1:1098472468577:web:d040b6983d14020a363a20'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()
export default db
