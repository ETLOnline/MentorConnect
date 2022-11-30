import { fireStore } from "./config";
export const getUsers = () => {
  const resualt = [];
  fireStore
    .collection("users")
    // .doc("HID06ysBc8cYx2rtsxvOAtOJT9o1")
    // .collection("details")
    .get()
    .then(async (snapshot) => {
      // console.log(snapshot.docs);
      snapshot.docs.forEach((doc) => {
        resualt.push({ id: doc.id, ...doc.data() });
      });
    });
  return resualt;
};
