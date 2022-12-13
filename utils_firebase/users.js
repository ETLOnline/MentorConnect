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
            points: {
              learningPoint: 100,
              coachingPoint: 100,
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

export const LoginWithEmailPassword = (data, router) => {
  console.log(data);
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
          points: {
            learningPoint: 100,
            coachingPoint: 100,
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

//  update profile image

export default function updateImage(image) {
  var Ref = fireStore.collection("users").doc("pSkpYdJuDpubniZvPTtl");

  // Set the "capital" field of the city 'DC'
  return Ref.update({
    "summry.image": image,
  })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}
export const updatePoint = (params) => {
  var Ref = fireStore.collection("users").doc("99iQxqVi3gc7ppU7Yvq8cSd26Wr1");
  return Ref.update({
    // "points.learningPoint": learningPoint-sessionPoins,
    "points.learningPoint": 100 - 100,
  })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

export const getSingleUser = (id) => {
  return fireStore
    .collection("users")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
        return "No such document!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export const updateProfile = (data) => {
  console.log(data, "update data");
  var Ref = fireStore.collection("users").doc("99iQxqVi3gc7ppU7Yvq8cSd26Wr1");
  return Ref.update({
    ...data,
  })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};