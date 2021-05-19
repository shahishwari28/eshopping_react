import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAplDxsCrsAG9qqsepUb2Va_dkBgvRbRI8",
    authDomain: "crown-clothingjs.firebaseapp.com",
    projectId: "crown-clothingjs",
    storageBucket: "crown-clothingjs.appspot.com",
    messagingSenderId: "468866206777",
    appId: "1:468866206777:web:e45a598e5a4c9c6d6551e8",
    measurementId: "G-R6999CHSD7"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

