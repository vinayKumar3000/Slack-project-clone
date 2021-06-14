import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCP2jr5VGxEBQ8oeLDmbej9Gr1ev8qv49U",
    authDomain: "slack-project-d43f8.firebaseapp.com",
    projectId: "slack-project-d43f8",
    storageBucket: "slack-project-d43f8.appspot.com",
    messagingSenderId: "459735980677",
    appId: "1:459735980677:web:907283bbab50e09947a7ec",
    measurementId: "G-FD5HMDT7MY"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
 
export {db,auth,provider};

