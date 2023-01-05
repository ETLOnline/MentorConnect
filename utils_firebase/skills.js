import firebase from "firebase/app";
import { fireStore } from "./config";
export const createSubject = (data) => {
  // Add a new document with a generated id.
  fireStore
    .collection("subjects")
    .add({
      name: data.name,

      skills: data.skills,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};
export const createSkills = (data) => {
  // Add a new document with a generated id.
  fireStore
    .collection("skills")
    .add({
      name: data.name,

      subject: data.subject,
      image: data.image,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

// get all skills
export const getAllSkills = async () => {
  const allSkills = [];
  const skills = await fireStore.collection("skills").get();
  // console.log(skills.docs);
  for (const doc of skills.docs) {
    allSkills.push({
      id: doc.id,
      ...doc.data(),
    });
  }
  return allSkills;
};
