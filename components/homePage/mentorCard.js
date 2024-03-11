import React, { Fragment } from "react";
import { BsChat } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const MentorCard = ({ mentors }) => {

  const router = useRouter;

  return (
    <Fragment>
      {mentors && mentors.length > 0
        ? mentors.map((mentor) => {
          return (
            <Card >
              <CardContent className="relative group h-[260px] p-0 text-primary overflow-hidden" >
                <div className="w-full h-full rounded-lg overflow-hidden" >
                  <Image
                    src={mentor.summry?.image || '/img/mentor-fallback.jpg'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full"
                    onClick={() => { router.push(`/auth/${mentor.id}`); }}
                  />
                </div>

                <div className="absolute w-full rounded-xl top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(36,36,36,0)] opacity-50 "></div>

                <div className="px-3 py-2 font-montserrat flex flex-col w-full absolute group-hover:rounded-xl group-hover:bg-background group-hover:-translate-y-6 group-hover:duration-1000 transition-all duration-1000 -bottom-11 hover:duration-1000">
                  <div className="flex justify-between">
                    <p className="text-sm line-clamp-1 h-6 w-[70%] font-semibold capitalize pr-2">
                      {mentor.summry?.displayName}
                    </p>
                    <p className="text-sm font-semibold">
                      {200} +Hrs
                    </p>
                  </div>
                  <div className="flex gap-1 text-[16px]">
                    <div className="h-6 w-6 pt-0.5" >
                      <BsChat />
                    </div>
                    <p className="text-sm line-clamp-2 capitalize pb-4">
                      {mentor.about || mentor.summry?.displayName}
                    </p>
                  </div>
                </div>

                <div className="absolute w-11 h-10 top-2 right-4 bg-[url('/img/Path.png')] bg-no-repeat hover:bg-[url('/img/redPath.svg')] "></div>

              </CardContent>
            </Card>
          );
        })
        : ""}
    </Fragment >
  );
};

export default MentorCard;
