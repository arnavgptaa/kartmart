import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAy2vNe_yjxjjtOOygf4MlTy5ZNnGJ_5vQ",
    authDomain: "clone-42b24.firebaseapp.com",
    projectId: "clone-42b24",
    storageBucket: "clone-42b24.appspot.com",
    messagingSenderId: "837694844258",
    appId: "1:837694844258:web:e5394073a3e3a559cf503b",
    measurementId: "G-RPKW1671MX"
  });

  const auth = firebase.auth(); 
  export { auth };