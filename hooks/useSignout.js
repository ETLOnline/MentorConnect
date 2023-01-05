import { useContext, useEffect, useState } from "react";
import { auth } from "../utils_firebase/config";
import { AuthContext } from "../contexts/auth_context";

export const useSignout = () => {
  const { setUser, triggerAuthEffect } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const signout = async (router) => {
    setError(null);
    setIsPanding(true);
    try {
      // Sign Up create user
      const userCredential = await auth.signOut();
      setUser((prev) => {
        return { ...prev, user: false, authIsValide: false };
      });
      if (!cancelled) {
        setError(null);
        setIsPanding(false);
      }

      router.push("/");
      triggerAuthEffect();

      // Signout
      console.log("logout");
    } catch (error) {
      console.log(error.message);
      if (!cancelled) {
        setError(error.message);
        setIsPanding(false);
      }
    }
  };

  // useEffect(() => {
  //   return () => {
  //     setCancelled(true);
  //   };
  // }, []);
  return { signout, error, isPanding };
};
