import "./firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

type SaveUser = (user: User | null) => void;

const auth = getAuth();

async function firebaseAuthenticate(saveUser: SaveUser) {
  const googleAuthProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, googleAuthProvider);
  saveUser(result.user);
}

function firebaseLogout() {
  return signOut(auth);
}

/* verifica se houve um login anterior que ainda está válido */
function onAuthStateChanged(saveUser: SaveUser) {
  return auth.onAuthStateChanged((user) => {
    console.log("OnAuthStateChanged User: " + user);
    saveUser(user);
  });
}

export type { User as AuthUser };
export { firebaseAuthenticate, firebaseLogout, onAuthStateChanged };
