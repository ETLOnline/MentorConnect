import firebase from "firebase/app";
import { fireStore } from "./config";
import { getSingleUser, updatePoint } from "./users";
// create Sesssion
export const createSession = (data, id, router) => {
  // Add a new document with a generated id.
  fireStore
    .collection("sessions")
    .add({
      approve: false,
      image: data.Image,
      instructor: id,
      students: [],
      tags: data.Tags,
      title: data.Title,
      startTime: new firebase.firestore.Timestamp.fromDate(
        new Date(data.StartTime)
      ),
      endTime: new firebase.firestore.Timestamp.fromDate(
        new Date(data.EndTime)
      ),
      poins: data.Points,
    })
    .then((docRef) => {
      // console.log("Document written with ID: ", docRef.id);
      if (router) {
        router.push("/");
      }
    })
    .catch((error) => {
      // console.error("Error adding document: ", error);
    });
};

export const updateSessionMeeting = (data, id, router) => {
  const ref = fireStore.collection("sessions").doc(id);
  return ref
    .update(
      {
        approve: "true" === data.Status,
        meetingLink: data.Meeting,
      }
      // { merge: true }
    )
    .then(() => {
      // console.log("Document successfully updated!");
      router.push("/admin");
    });
};
// students register session
export const registorSession = (sessionId, uid) => {
  var Ref = fireStore.collection("sessions").doc(sessionId);
  // if(userPoins>sessionPoins){
  if (true) {
    updatePoint();
    Ref.update({
      students: firebase.firestore.FieldValue.arrayUnion(uid),
    });
    // console.log("update ho gya he");
    return "You are Register this Session";
  } else {
    return "Do not have enough points...";
  }
};
// get all sessions
export const getAllSessions = async (cond) => {
  // console.log(firebase.firestore.Timestamp.fromDate(new Date()), "date");
  const allSessions = [];
  const session = await fireStore
    .collection("sessions")
    .where("approve", "==", cond)
    .where("startTime", ">=", firebase.firestore.Timestamp.fromDate(new Date()))
    .get();
  // console.log(session, "session");
  for (const doc of session.docs) {
    const user = await getSingleUser(doc.data().instructor);
    allSessions.push({
      id: doc.id,
      ...doc.data(),
      instructor: user,
    });
  }
  return allSessions;
};

// -----get all past sessions without link-----
export const getAllPastSessionsWOLink = async () => {
  // console.log(firebase.firestore.Timestamp.fromDate(new Date()), "date");
  const allSessions = [];
  const session = await fireStore
    .collection("sessions")
    .where("startTime", "<=", firebase.firestore.Timestamp.fromDate(new Date()))
    .get();
  // console.log(session, "session");
  for (const doc of session.docs) {
    const user = await getSingleUser(doc.data().instructor);
    allSessions.push({
      id: doc.id,
      ...doc.data(),
      instructor: user,
    });
  }
  return allSessions;
};

// filter session by tags
export const filterSessionByTag = async (tag) => {
  // console.log("filterSessionByTag",tag);
  const allSessions = [];
  const session = await fireStore
    .collection("sessions")
    .where("approve", "==", true)
    .where("tags", "array-contains", tag)
    .get();
  // console.log(session.docs);
  for (const doc of session.docs) {
    const user = await getSingleUser(doc.data().instructor);
    allSessions.push({
      id: doc.id,
      ...doc.data(),
      instructor: user,
    });
  }
  return allSessions;
};

//  get session by id
export const getSessionById = async (id) => {
  const allStudents = [];

  const doc = await fireStore.collection("sessions").doc(id).get();
  if (doc.exists) {
    const instructor = await getSingleUser(doc.data().instructor);
    for (const element of doc.data().students) {
      const user = await getSingleUser(element);
      allStudents.push(user);
    }
    return { ...doc.data(), students: allStudents, instructor };
  } else {
    return "No such document!";
  }
};

//  filter session by user intrest
export const getSessionByUserSkills = async (data) => {
  try {
    const allfilterSession = [];
    // console.log(data, "skillfilter");
    const doc = await fireStore
      .collection("sessions")
      .where(
        "startTime",
        ">=",
        firebase.firestore.Timestamp.fromDate(new Date())
      )
      .where("approve", "==", true)
      .where("tags", "array-contains-any", data)
      .get();
    for (const element of doc.docs) {
      const user = await getSingleUser(element.data().instructor);
      allfilterSession.push({
        id: element.id,
        ...element.data(),
        instructor: user,
      });
    }
    // console.log(allfilterSession);
    return allfilterSession;
  } catch (error) {
    // console.log(error);
  }
};

//  get all session in which user register
export const getSessionInUserRegister = async (id) => {
  try {
    const allfilterSession = [];
    const doc = await fireStore
      .collection("sessions")
      .where("approve", "==", true)
      .where("students", "array-contains", id)
      .get();
    // console.log(doc);
    if (!doc.empty) {
      for (const element of doc.docs) {
        const user = await getSingleUser(element.data().instructor);
        allfilterSession.push({ ...element.data(), instructor: user });
      }
      // console.log(allfilterSession);
      return allfilterSession;
    } else {
      return "You are not register any Sessions";
    }
  } catch (error) {
    // console.log(error);
  }
};

// -----Create New Past Session--------
export const createNewPastSession = (data, id) => {
  fireStore.collection("sessions").add({
    isPast: true,
    instructor: id,
    tags: data.tags,
    title: data.title,
    description: data.description,
    // instructor: data.instructor,
    videoUrl: data.videoUrl,
  });
};

// -----Create Past Session by updating existing session--------
export const createPastSessionByUpdate = (data, id, router) => {
  const ref = fireStore.collection("sessions").doc(id);
  return ref
    .update(
      {
        isPast: true,
        videoUrl: data.videoUrl,
      }
      // { merge: true }
    )
    .then(() => {
      // console.log("Document successfully updated!");
      router.push("/admin");
    });
};

// -----get all past sessions with link (display on home page)-----
export const getAllPastSessionsWithLink = async () => {
  const allSessions = [];
  const session = await fireStore
    .collection("sessions")
    .where("isPast", "==", true)
    .get();
  // console.log(session, "session");
  for (const doc of session.docs) {
    const user = await getSingleUser(doc.data().instructor);
    allSessions.push({
      id: doc.id,
      ...doc.data(),
      instructor: user,
    });
  }
  return allSessions;
};

//  -----filter past session by user intrest----
export const getPastSessionByUserSkills = async (data) => {
  try {
    const allfilterSession = [];
    // console.log(data, "skillfilter");
    const doc = await fireStore
      .collection("sessions")
      .where("isPast", "==", true)
      .where("tags", "array-contains-any", data)
      .get();
    for (const element of doc.docs) {
      const user = await getSingleUser(element.data().instructor);
      allfilterSession.push({
        id: element.id,
        ...element.data(),
        instructor: user,
      });
    }
    // console.log(allfilterSession);
    return allfilterSession;
  } catch (error) {
    // console.log(error);
  }
};

// -----get all sessions for calendar-----
export const getAllSessionsCalendar = async () => {
  const allSessions = [];
  const session = await fireStore
    .collection("sessions")
    .where("approve", "!=", null)
    .get();
  // console.log(session, "session");
  for (const doc of session.docs) {
    const user = await getSingleUser(doc.data().instructor);
    allSessions.push({
      id: doc.id,
      ...doc.data(),
      instructor: user,
    });
  }
  return allSessions;
};
