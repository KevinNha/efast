import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApk4FfYcduR60b2ZveQpMcJXxU_wvzqyM",
    databaseURL: 'https://efast-afe4d-default-rtdb.firebaseio.com/',
    authDomain: "efast-afe4d.firebaseapp.com",
    projectId: "efast-afe4d",
    storageBucket: "efast-afe4d.appspot.com",
    messagingSenderId: "911095628015",
    appId: "1:911095628015:web:c809494ca83bcd13fb5b1a",
    measurementId: "G-F1RBLVQZ6H"
  };

export default Firebase.initializeApp(firebaseConfig);