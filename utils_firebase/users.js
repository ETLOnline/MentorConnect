import { fireStore } from "./config";

export const getUsers = async () => {
  const resualt = [];
  const data = await fireStore.collection("users").get();

  data.docs.forEach((doc) => {
    resualt.push({ id: doc.id, ...doc.data() });
  });
  return resualt;
};

const collection = {
  name: "sajid",
  age: 23,
  skills: "react developer",
};
