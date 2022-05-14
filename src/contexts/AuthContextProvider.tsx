import { createContext, ReactNode, useEffect, useState } from "react";
import {
  AuthUser,
  firebaseAuthenticate,
  firebaseLogout,
  onAuthStateChanged,
} from "../services/firebase/auth";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(afterLeaving: () => void): void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(saveUserInContext);
    return () => {
      unsubscribe();
    };
  }, []);

  async function signIn() {
    await firebaseAuthenticate(saveUserInContext);
  }

  function signOut(afterLeaving: () => void) {
    firebaseLogout().then(() => {
      setUser(undefined);
      afterLeaving();
    });
  }

  function saveUserInContext(authUser: AuthUser | null) {
    if (authUser) {
      const { displayName, photoURL, uid } = authUser;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }

    console.log("Atraso forçado para simular o carregamento externo");
    new Promise(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
