import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

  // Initialize Specific Data Store (Firebase - Firestore)
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCiqyc_q79aWyRokki38pc4ByB-1nW8iZs",
  authDomain: "anth-portfolio.firebaseapp.com",
  projectId: "anth-portfolio",
  storageBucket: "anth-portfolio.appspot.com",
  messagingSenderId: "191884125980",
  appId: "1:191884125980:web:262002fc932dcc4df67cd9"
};

  // const firebaseConfig = {
  //     apiKey: "AIzaSyDGh1cfvCjmIw_uUeKWMi0Ieq9W6K673LI",
  //     authDomain: "blog-lab-17b7d.firebaseapp.com",
  //     projectId: "blog-lab-17b7d",
  //     storageBucket: "blog-lab-17b7d.appspot.com",
  //     messagingSenderId: "886882131782",
  //     appId: "1:886882131782:web:866629ca6307b54ce50f47",
  //     measurementId: "G-4J310YVSYS"
  //   };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // utils
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  db.settings({ timestampsInSnapshots: true })
  
export {
  db, auth
}