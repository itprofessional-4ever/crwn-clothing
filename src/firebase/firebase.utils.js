import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC6-VnrAdhFDkakZJdlD14x2xtDhEF2iXY",
    authDomain: "crwn-db-a9615.firebaseapp.com",
    projectId: "crwn-db-a9615",
    storageBucket: "crwn-db-a9615.appspot.com",
    messagingSenderId: "179449186335",
    appId: "1:179449186335:web:b92215ee9c3ea86ef62d2a",
    measurementId: "G-3Q65CRF4QL"
  };
  

initializeApp(config)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const firestore = getFirestore()

export const auth = getAuth()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .catch((error) => {
    // Handle errors here
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used
    const email = error.email
    // The AuthCredential type that was used
    const credential = GoogleAuthProvider.credentialFromError(error)
    // Do whatever to handle error
    console.log({
      errorCode,
      errorMessage,
      email,
      credential
    })
  })
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`)
  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    
    try {

      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}