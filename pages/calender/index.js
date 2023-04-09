import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useEffect, useState, useContext } from "react";
import {
  getAllSessions,
  getAllSessionsCalendar,
} from "../../utils_firebase/sessions";
import Spinner from "../../components/spinner";
import { AuthContext } from "../../contexts/auth_context";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [sessions, setSessions] = useState(false);
  useEffect(() => {
    async function name() {
      // const seasion = await getAllSessions(true);
      const seasion = await getAllSessionsCalendar();

      // console.log(seasion, ">>>>>>>>>>><<<LLLLLLLLKKKKKKKKKKK");
      const filtersession = seasion.map((doc) => {
        // console.log(
        //   new Date(
        //     doc.startTime.seconds * 1000 + doc.startTime.nanoseconds / 1000000
        //   ).toISOString()
        // );
        const start = new Date(
          doc.startTime.seconds * 1000 + doc.startTime.nanoseconds / 1000000
        ).toISOString();
        const end = new Date(
          doc.endTime.seconds * 1000 + doc.endTime.nanoseconds / 1000000
        ).toISOString();
        return {
          title: doc.title,
          start,
          end,
        };
      });
      console.log(filtersession, ">>>>>>>>>>>>><<<<SSS<S<<S<S");
      setSessions(filtersession);
    }
    name();
  }, []);

  if (!user.user) {
    return (
      <div className=" text-center h-[30vh]  items-center  text-5xl mb-20 mt-20">
        <p>First Login Please</p>
        <p>Loading.... </p>
      </div>
    );
  }

  if (!sessions) {
    return <Spinner />;
  }

  console.log(sessions);
  return (
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      initialView="dayGridMonth"
      nowIndicator={true}
      editable={false}
      initialEvents={sessions}
    />
  );
}
