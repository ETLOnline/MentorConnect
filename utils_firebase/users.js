import { auth, fireStore, googleProvider } from "./config";

export const getUsers = async () => {
  const resualt = [];
  const data = await fireStore.collection("users").get();

  data.docs.forEach((doc) => {
    resualt.push({ id: doc.id, ...doc.data() });
  });
  return resualt;
};

// Sign Up create user
export const SignupWithEmailPassword = (data, router) => {
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
            router.push("/");
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
      router.push("/");
      // ...
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

//  login with google

export const loginWithGoogle = (router) => {
  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      const credential = result.credential;
      console.log(credential);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      fireStore
        .collection("users")
        .doc(user.uid)
        .set({
          uid: user.uid,
          summry: {
            displayName: user.displayName,
            email: user.email,
            image: user.photoURL,
          },
        })
        .then(() => {
          console.log("Document successfully written!");
          router.push("/");
        });

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};
