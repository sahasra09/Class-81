import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyA1Byoiyz5CjWvg_GW2CStHzBMQDsLENUo",
    authDomain: "book-santa-e51a1.firebaseapp.com",
    projectId: "book-santa-e51a1",
    storageBucket: "book-santa-e51a1.appspot.com",
    messagingSenderId: "777859697833",
    appId: "1:777859697833:web:7629c46f210dd57f01edb8",
    measurementId: "G-LXYZJ8SHVP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()