import { auth, fireStore } from "./config";

export const getUsers = async () => {
  const resualt = [];
  const data = await fireStore.collection("users").get();

  data.docs.forEach((doc) => {
    resualt.push({ id: doc.id, ...doc.data() });
  });
  return resualt;
};

// Sign Up create user
export const SignupWithEmailPassword = (data) => {
  console.log(
    data,
    ">>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  );
  const image = data.image
    ? data.image
    : "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png";
  auth
    .createUserWithEmailAndPassword(data.gmail, data.password)
    .then((userCredential) => {
      console.log(userCredential, "create user");
      userCredential.user.sendEmailVerification().then(() => {
        // Email verification sent!
        fireStore
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            uid: userCredential.user.uid,
            summry: {
              displayName: data.firstName + data.lastName,
              email: data.gmail,
              image: image,
            },
          })
          .then(() => {
            console.log("Document successfully written!");
          });

        console.log("Email send");
      });
      // Signed in
      var user = userCredential.user;
      console.log(user, "Signed in");
      // ...
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};

// login with email password

export const LoginWithEmailPassword = (data) => {
  auth
    .signInWithEmailAndPassword(data.gmail, data.password)
    .then((userCredential) => {
      // Signed in

      var user = userCredential.user;
      console.log(user, "login");
      // ...
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};
