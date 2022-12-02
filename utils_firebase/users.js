import { auth, fireStore } from "./config";

export const getUsers = async () => {
  const resualt = [];
  const data = await fireStore.collection("users").get();

  data.docs.forEach((doc) => {
    resualt.push({ id: doc.id, ...doc.data() });
  });
  return resualt;
};
export const LoginWithEmailPassword = () => {
  console.log(
    ">>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  );
  auth
    .createUserWithEmailAndPassword("15aliraza786@gmail.com", "password")
    .then((userCredential) => {
      console.log(userCredential, "create user");
      userCredential.user.sendEmailVerification().then(() => {
        // Email verification sent!
        // ...

        console.log("Email send");
      });
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};
