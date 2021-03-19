import firebase from 'firebase'
require ('firebase/auth')
require ('firebase/firestore')
require ('firebasse/storage')

  // Initialize Specific Data Store (Firebase - Firestore)
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyC_pWGPlc8r9Vx2V89cq9EUc16CWtmPZvU",
    authDomain: "portfolio-anth.firebaseapp.com",
    projectId: "portfolio-anth",
    storageBucket: "portfolio-anth.appspot.com",
    messagingSenderId: "729321349205",
    appId: "1:729321349205:web:d6747d9e832d4fdda7b4dc",
    measurementId: "G-LRREK59MR7"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // utils
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const storage = firebaseApp.storage()
  db.settings({ timestampsInSnapshots: true })
  
export {
  db, auth, storage
}