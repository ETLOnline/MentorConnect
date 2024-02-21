import React from "react";
import Spinner from "../spinner";
import Image from "next/image";
import { getTimeAgo } from "../../helpers";
const LearningCard = ({ data }) => {
  if (!data) {
    return <Spinner />;
  }

  console.log("start time : ", data.startTime.seconds);
  return (
    <>
      <div className="rounded-xl flex justify-center hover:bg-[#F4F4F4] border font-montserrat p-2">
        <div className="w-full flex flex-col items-center xs:flex-row gap-4">
          <div className="relative max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] xs:min-w-[96px] xs:min-h-[96px]">
            <Image
              src={data?.image}
              alt="img"
              fill
              className=" rounded-[12px]"
            />
          </div>

          <div className="w-[76.93%] flex flex-col mx-auto gap-2 my-auto">
            <p className="text-xs text-primary/75 flex items-center gap-4">
              <span className="font-semibold" >Registered:</span>  {getTimeAgo(new Date(data.startTime.seconds * 1000))}
            </p>
            <div className="flex gap-3">
              <span className="h-10 w-10 border rounded-full flex justify-center items-center p-1 bg-primary/10" >
                <Image
                  src={data.instructor.summry?.image}
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
              </span>

              <div className="flex flex-col" >
                <p className="text-base font-semibold line-clamp-1 text-primary">
                  {data.title}
                </p>
                <p className="text-sm text-primary/90">
                  {data.instructor.summry?.displayName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LearningCard;
