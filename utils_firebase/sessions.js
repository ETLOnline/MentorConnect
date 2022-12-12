import firebase from "firebase/app";
import { fireStore } from "./config";
import { updatePoint } from "./users";
// create Sesssion
export const createSession = (data) => {
  // Add a new document with a generated id.
  fireStore
    .collection("sessions")
    .add({
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGL4VXH0n3EwUSR7VGx38Dtj4_TCcnFJTVfijNiqeiQ&s",
      instructor: "HID06ysBc8cYx2rtsxvOAtOJT9o1",
      students: [
        "HID06ysBc8cYx2rtsxvOAtOJT9o1",
        "HID06ysBc8cYx2rtsxvOAtOJT9o1",
      ],
      tags: ["JS", "React JS"],
      title: "Learning JS & React JS",
      startTime: new firebase.firestore.Timestamp.fromDate(new Date()),
      endTime: new firebase.firestore.Timestamp.fromDate(new Date()),
      poins: 100,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

// students register session
export const registorSession = (data) => {
  var Ref = fireStore.collection("sessions").doc("7DtzbUdeAYcfRX6Z5dRX");

  // if(userPoins>sessionPoins){
  if (true) {
    updatePoint();
    Ref.update({
      students: firebase.firestore.FieldValue.arrayUnion(
        "new usersss id added in to session"
      ),
    });
    console.log("update ho gya he");
  } else {
    return "Do not have enough points...";
  }
};
// get all sessions
export const getAllSessions = () => {
  const allSessions = [];
  fireStore
    .collection("sessions")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
        allSessions.push({ id: doc.id, ...doc.data() });
      });
      console.log("object>>>>><<<<<>>>>>>><<<<<>>>>><<<<>><>", allSessions);
    });
};
