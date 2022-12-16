import { useContext, useEffect, useState } from "react";
import { auth } from "../utils_firebase/config";
import { AuthContext } from "../contexts/auth_context";

export const useSinin = () => {
  const { setUser } = useContext(AuthContext);
  const [errors, setError] = useState(null);
  const [isPandings, setIsPanding] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const signin = async (data, router) => {
    setError(null);
    setIsPanding(true);
    try {
      // Sign Up create user
      const userCredential = await auth.signInWithEmailAndPassword(
        data.gmail,
        data.password
      );
      setUser((prev) => {
        return { ...prev, user: userCredential.user };
      });
      if (!cancelled) {
        setError(null);
        setIsPanding(false);
      }
      router.push("/");
      // Signed in
      var user = userCredential.user;
      console.log(user, "login");
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
  return { signin, errors, isPandings };
};
