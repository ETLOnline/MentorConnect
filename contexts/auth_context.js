import React, { createContext, useState, useEffect } from "react";
import { auth } from "../utils_firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null, authIsValide: false });

  const triggerAuthEffect = () => {
    // if (trigger == true) {
    //   setTrigger(false);
    // } else if (trigger == false) {
    //   setTrigger(true);
    // }
  };

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((userCredential) => {
      console.log(userCredential, "on auth state change");
      setUser((prev) => {
        return { ...prev, user: userCredential, authIsValide: true };
      });
      unSub();
    });
  }, []);
  console.log(user, "auth user");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
