import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
import 'firebase/firebase-firestore'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCDdLWje-N3PsdgNTjs1kapdv246MhbgN0",
  authDomain: "olx-clone-f50b4.firebaseapp.com",
  projectId: "olx-clone-f50b4",
  storageBucket: "olx-clone-f50b4.appspot.com",
  messagingSenderId: "722509281686",
  appId: "1:722509281686:web:b75e10f4fdb770b1a7c5b7",
  measurementId: "G-S4YT9F7K3Y"
};

 export default firebase.initializeApp(firebaseConfig)
