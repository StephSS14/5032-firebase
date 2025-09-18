import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVnbRIgg9fyj2pRzlAda_BQvA_afdoELg",
  authDomain: "week7-stephanie.firebaseapp.com",
  projectId: "week7-stephanie",
  storageBucket: "week7-stephanie.firebasestorage.app",
  messagingSenderId: "1098472468577",
  appId: "1:1098472468577:web:d040b6983d14020a363a20"
};

// Initialize Firebase
initializeApp(firebaseConfig);