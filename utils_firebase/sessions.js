import { fireStore } from "./config";

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
      poins: 100,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};
