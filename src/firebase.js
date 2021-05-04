import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDwc7-qN6W1i4XzzrPruw2EUcH9fKpVyO8',
  authDomain: 'slack-clone-1011.firebaseapp.com',
  projectId: 'slack-clone-1011',
  storageBucket: 'slack-clone-1011.appspot.com',
  messagingSenderId: '195883583901',
  appId: '1:195883583901:web:a36b4bfb33a8f67d028774',
  measurementId: 'G-5GBX2R98M9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
