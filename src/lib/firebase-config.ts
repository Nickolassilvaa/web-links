import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signOut, signInWithPopup } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHhHG628wmO_nrBKDqWHERhL87LTKKHnI",
  authDomain: "weblink-bebb8.firebaseapp.com",
  projectId: "weblink-bebb8",
  storageBucket: "weblink-bebb8.appspot.com",
  messagingSenderId: "103238836006",
  appId: "1:103238836006:web:099e95c9e82d51687eebe7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider().setCustomParameters({prompt: "select_account"});


const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider); 
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoUrl: user.photoURL
      });
    }

    const response = await fetch("/api/signIn", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await user.getIdToken()}`,  
      }
    });

    if (response.status === 200) {
      window.location.replace('/');
    }

  } catch (err) {
    console.error(err);
  }
};

const logout = async () => {
  const response = await fetch("/api/signOut", {
    method: "POST",
  });

  if (response.status === 200) {
    window.location.replace('/');
  }
  // signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logout,
};

