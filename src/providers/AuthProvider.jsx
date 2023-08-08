import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../utils/firebase.config";
import api from "../utils/apiInstance";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const createUser = (authInfo, email, password) => {
    setIsAuthLoading(true);
    return createUserWithEmailAndPassword(authInfo, email, password);
  };

  const loginWithPassword = (authInfo, email, password) => {
    setIsAuthLoading(true);
    return signInWithEmailAndPassword(authInfo, email, password);
  };

  const logout = (authObj) => {
    setIsAuthLoading(true);
    return signOut(authObj);
  };

  const authInfo = {
    user,
    userDB,
    setUser,
    isAuthLoading,
    auth,
    createUser,
    loginWithPassword,
    logout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser(userInfo);
        api
          .get(`/users/loggedin/${userInfo?.email}`)
          .then((res) => {
            setUserDB(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        setIsAuthLoading(false);
      } else {
        setUser(null);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
