import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const config = {
    apiKey: "AIzaSyC6-VnrAdhFDkakZJdlD14x2xtDhEF2iXY",
    authDomain: "crwn-db-a9615.firebaseapp.com",
    projectId: "crwn-db-a9615",
    storageBucket: "crwn-db-a9615.appspot.com",
    messagingSenderId: "179449186335",
    appId: "1:179449186335:web:b92215ee9c3ea86ef62d2a",
    measurementId: "G-3Q65CRF4QL"
  };
  
  const app = initializeApp(config);

  export const authentication = getAuth(app);
  export default firebase;
 