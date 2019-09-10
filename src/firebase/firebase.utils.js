import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// PERFECTLY SAFE TO HAVE ON GITHUB. SAFE TO BE PUBLIC ACCESS
const config = {
    apiKey: "AIzaSyCtr8hqLtWRG5MJJ3J648NTbPX9nZ_omi0",
    authDomain: "crown-db-f0fb6.firebaseapp.com",
    databaseURL: "https://crown-db-f0fb6.firebaseio.com",
    projectId: "crown-db-f0fb6",
    storageBucket: "",
    messagingSenderId: "915022167671",
    appId: "1:915022167671:web:afe81f4143e67617139072"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
