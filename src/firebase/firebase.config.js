import { initializeApp } from "firebase/app";
import { checkFirebaseError } from "./firebase.utils";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
  User as FirebaseUser,
} from "firebase/auth";
import {
  onSnapshot,
  getFirestore,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,

  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export async function signInUserWithCredentials({ email, password }) {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    return userData.user;
  } catch (error) {
    const message = checkFirebaseError(error);
    return message;
  }
}

export async function updateUserProfile(displayName) {
  return await updateProfile(auth.currentUser, {
    displayName: displayName,
  });
}

export async function createNewUser({ firstName, lastName, email, password }) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const displayName = `${firstName} ${lastName}`;
    await updateUserProfile(displayName);
    return userCredentials.user;
  } catch (error) {
    const message = checkFirebaseError(error);
    return message;
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    const message = checkFirebaseError(error);
    return message;
  }
}

export async function createANewNote({ tagName, text, title, ownerID }) {
  try {
    const docRef = await addDoc(collection(db, "notes"), {
      tagName,
      text,
      title,
      ownerID,
      timeStamp:serverTimestamp()
    });
  } catch (error) {
    const message = checkFirebaseError(error);
    return message;
  }
}

export async function deleteNote(noteID) {
  try {
    await deleteDoc(doc(db, "notes", `${noteID}`));
  } catch (error) {
    const message = checkFirebaseError(error);
    return message;
  }
}

export async function updateNote({ noteID, note, tag, title }) {
  try {
    const docRef = doc(db, "notes", `${noteID}`);

    const response = await updateDoc(docRef, {
      text: note,
      tagName: tag,
      title: title,

    });
  } catch (error) {
    const message = checkFirebaseError(error);
    return message;
  }
}
