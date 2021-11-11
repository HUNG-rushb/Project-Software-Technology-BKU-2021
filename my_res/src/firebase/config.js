// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// https://stackoverflow.com/questions/68929593/vue-2-export-default-imported-as-firebase-was-not-found-in-firebase-app

const firebaseConfig = {
  apiKey: "AIzaSyAI1WERiMbynDZ_EyLBh34TdLH1niw5vNo",
  authDomain: "project-software-technoloy.firebaseapp.com",
  databaseURL:
    "https://project-software-technoloy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-software-technoloy",
  storageBucket: "project-software-technoloy.appspot.com",
  messagingSenderId: "205451832905",
  appId: "1:205451832905:web:ee8698de424dee7d6bd998",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };
