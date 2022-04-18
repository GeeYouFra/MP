// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD04ON6e7yCHjX3ljsK7_NJALqq4pKlyU4',
  authDomain: 'animemobileprogramming.firebaseapp.com',
  projectId: 'animemobileprogramming',
  storageBucket: 'animemobileprogramming.appspot.com',
  messagingSenderId: '865431266413',
  appId: '1:865431266413:web:a4ceeea1d3f9345d994b64',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
