import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase";
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loding, setLoding] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const userCreate = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const mediasignin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };
  const passwordreste = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unSabscribe = onAuthStateChanged(auth, (cruntUser) => {
      setUser(cruntUser);
      setLoding(false);
    });
    return () => {
      unSabscribe();
    };
  }, []);

  const logOutUser = () => {
    return signOut(auth);
  };

  const authinfo = {
    user,
    userCreate,
    userLogin,
    mediasignin,
    loding,
    logOutUser,
    passwordreste,
    theme,
    toggleTheme,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
