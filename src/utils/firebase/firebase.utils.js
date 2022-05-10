import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'

import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdAttYi471N6dydeS9IccBV81Vjyvtm40",
    authDomain: "crwn-clothing-db-5ccd1.firebaseapp.com",
    projectId: "crwn-clothing-db-5ccd1",
    storageBucket: "crwn-clothing-db-5ccd1.appspot.com",
    messagingSenderId: "360433092272",
    appId: "1:360433092272:web:68d273eecc2c766fe25d75"
  };
  
  // Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch (db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
}

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q =query (collectionRef);
  const querySnapShot = await getDocs(q);
  const getCollectMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const {title,items} = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return getCollectMap;
}

export const userCreateFromDoc = async (username, additionalInformation) => {
  if (!username) return;
  const userRefDoc = doc(db,'users',username.uid);
  const userSnapShot = await getDoc(userRefDoc)

  if (!userSnapShot.exists()) {
    const {displayName,email} = username;
    const creataAt = new Date();

    try {
      setDoc(userRefDoc,{
        displayName,
        email,
        creataAt,
        ...additionalInformation
      })
    }
    catch (error) {
      console.log('error message is', error)
    }
  }

  return userRefDoc;
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password )
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password )
}

export const signOutUser = async () => {return await signOut(auth)}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);