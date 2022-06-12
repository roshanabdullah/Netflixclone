import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyDpuWGEWZT4_ySYMVC9N0_nXPh7sSatmds",
  
    authDomain: "netflix-clone-5a8c6.firebaseapp.com",
  
    projectId: "netflix-clone-5a8c6",
  
    storageBucket: "netflix-clone-5a8c6.appspot.com",
  
    messagingSenderId: "1032331083878",
  
    appId: "1:1032331083878:web:061b4d75a1f0101572ada7",
  
    measurementId: "G-KMWKX4JKQX"
  
  };

  const app=initializeApp(firebaseConfig); 
   export const auth=getAuth(app);