import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

  // Initialize Specific Data Store (Firebase - Firestore)
  const firebaseConfig = {
      apiKey: "AIzaSyDGh1cfvCjmIw_uUeKWMi0Ieq9W6K673LI",
      authDomain: "blog-lab-17b7d.firebaseapp.com",
      projectId: "blog-lab-17b7d",
      storageBucket: "blog-lab-17b7d.appspot.com",
      messagingSenderId: "886882131782",
      appId: "1:886882131782:web:866629ca6307b54ce50f47",
      measurementId: "G-4J310YVSYS"
    };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // utils
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  db.settings({ timestampsInSnapshots: true })
  
export {
  db, auth
}