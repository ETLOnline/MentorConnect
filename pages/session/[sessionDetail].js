import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";


import InterestsTile from "../../components/tiles/InterestsTile";
import { getSessionById, registorSession } from "../../utils_firebase/sessions";

import Spinner from "../../components/spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomButton from "@/components/ui/custom/custom-button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { AuthContext } from "../../contexts/auth_context";
import { getNameInitials, getUsersCountFormat } from "../../helpers";
import { followUser } from "../../utils_firebase/users";

import { FaBookmark } from "react-icons/fa";
import { WidthIcon } from "@radix-ui/react-icons";
import Divider from "../../components/tiles/divider";

const SessionDetail = () => {
  const { user } = useContext(AuthContext);
  const [session, setSession] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disableButtonCriteria, setDisableButtonCriteria] = useState(false);
  const router = useRouter();
  const id = router.query.sessionDetail;

  useEffect(() => {
    setLoading(true);
    getSessionById(id)
      .then((res) => {
        setSession(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);

  if (!user.user) {
    return (
      <div className=" text-center items-center h-[30vh] text-5xl mb-20 mt-20">
        <p>First Login Please</p>
        <p>Loading.... </p>
      </div>
    );
  }

  const onFollowHandler = (id, name) => {

    followUser(id, user.user.uid);
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    toast.promise(resolveAfter3Sec, {
      pending: "please wait ",
      success: "You Follow " + name,
      error: "Error 🤯",
    });
  };


  console.log("Session: ", session);

  useEffect(() => {
    if (user.user.uid && session.students) {
      const currentUserId = user.user.uid;
      const criteria = session.students.find(student => student.uid === currentUserId) ? true : false;
      setDisableButtonCriteria(criteria);
    }
  }, [user.user.uid, session.students]);

  return (
    loading ? <Spinner /> :
      <div className="px-6 lg:px-10 my-4 grid gap-4 lg:gap-8 lg:grid-cols-10" >
        <div className="lg:col-span-3 flex flex-col gap-3" >
          <Image
            src={session.image}
            alt="img"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover"
          />

          <div className="grid grid-cols-10" >
            <div className="col-span-2 flex justify-center items-center">
              <Avatar className='h-10 w-10'>
                <AvatarImage src={session.instructor?.image} />
                <AvatarFallback className="text-xs font-semibold uppercase">
                  {getNameInitials(session.instructor?.summry.displayName)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-8" >
              <h2 className="text-text text-base lg:text-lg leading-tight capitalize font-bold">
                {session.instructor?.summry.displayName}
              </h2>
              <div className="flex items-center justify-between text-xs lg:text-sm" >
                <p>{getUsersCountFormat((session.instructor?.followers || []).length, 'Follower')}</p>
                <p>{getUsersCountFormat((session?.students || []).length, 'Attendee')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-2">
          <div>
            <h1 className="font-bold text-2xl ">
              {session.title}
            </h1>

            <div className="m-4 flex flex-wrap gap-3">
              {session.tags?.map((tag, index) => {
                return (
                  <InterestsTile key={index} data={tag} />
                );
              })}
            </div>
          </div>

          <Divider />

          <div>
            <h1 className="font-semibold text-xl">
              Points required:
            </h1>

            <div className="m-4 flex justify-between md:justify-start md:gap-6 xl:gap-8">
              <div className="flex flex-col gap-1 items-center">
                <Avatar className='h-16 w-16'>
                  <AvatarFallback className="text-3xl font-semibold uppercase bg-foreground/20 text-background">
                    {session.poins < 10 ? '0' + session.poins : session.poins}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-sm">Coaching Points</h1>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <Avatar className='h-16 w-16'>
                  <AvatarFallback className="text-3xl font-semibold uppercase bg-foreground/20 text-background">
                    {session.poins < 10 ? '0' + session.poins : session.poins}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-sm">Learning Points</h1>
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <h1 className="font-semibold text-xl">
              Session Timings:
            </h1>

            <div className="mx-4 py-2 flex justify-between md:justify-start items-center gap-6 text-primary text-sm" >
              <p className="flex gap-1 md:gap-2">
                <span>{dayjs((session.startTime?.seconds + session.startTime?.nanoseconds) * 1000).format('hh:mm A')}</span>
                <span>{dayjs((session.startTime?.seconds + session.startTime?.nanoseconds) * 1000).format('DD MMM YY')}</span>
              </p>
              <WidthIcon />
              <p className="flex gap-1 md:gap-2">
                <span>{dayjs((session.endTime?.seconds + session.endTime?.nanoseconds) * 1000).format('hh:mm A')}</span>
                <span>{dayjs((session.endTime?.seconds + session.endTime?.nanoseconds) * 1000).format('DD MMM YY')}</span>
              </p>
            </div>
          </div>

          <Divider />

          <div className="m-4 flex justify-center">

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>

                  <CustomButton
                    onClick={() => {
                      if (!disableButtonCriteria) {
                        const data = registorSession(id, user.user.uid);
                        const resolveAfter3Sec = new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        toast.promise(resolveAfter3Sec, {
                          pending: "please wait ",
                          success: data,
                          error: "Error 🤯",
                        });
                      }
                    }}
                    variant={"outline"}
                    icon={<FaBookmark />}
                    iconPosition="start"
                    disabled={disableButtonCriteria ? true : false}
                  >
                    Register Session
                  </CustomButton>

                </TooltipTrigger>
                <TooltipContent>
                  {disableButtonCriteria && <p>Already registered to this session.</p>}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

        </div>
      </div>

  );
};

export default SessionDetail;
