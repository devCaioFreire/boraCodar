import firebase from 'firebase/app';
import 'firebase/auth';
import { User, auth } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: auth.Error | null;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  signInWithEmailAndPassword: () => Promise.reject(),
  createUserWithEmailAndPassword: () => Promise.reject(),
  signOut: () => Promise.reject(),
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<auth.Error | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      user => {
        setUser(user);
        setLoading(false);
      },
      error => {
        setError(error);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithEmailAndPassword = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const createUserWithEmailAndPassword = (email: string, password: string) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    return firebase.auth().signOut();
  };

  const value = {
    user,
    loading,
    error,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
