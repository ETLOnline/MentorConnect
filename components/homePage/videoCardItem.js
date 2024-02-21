import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

const VideoCardItem = ({ link, title, instructorName, instructorImage }) => {
  // console.log(data);
  return (
    <Fragment>
      <div className="w-full flex flex-col bg-[#F4F4F4] rounded-[12px] overflow-hidden font-montserrat">
        <div className="relative mx-auto w-[100%] h-[200px] ">
          <ReactPlayer
            url={link}
            width="100%"
            height="100%"
            pip={true}
            controls={true}
            playing={false}
            className="absolute top-0 left-0 "
          />
        </div>

        <div className="flex flex-col py-4 px-2 min-h-[96px]">
          <div className="flex gap-2" >
            <div className="w-[15%] pt-1" >
              <span className="h-10 w-10 border rounded-full flex justify-center items-center p-1 bg-primary/10" >
                <Image
                  src={instructorImage}
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-full"
                />
              </span>
            </div>

            <div className="w-[85%]">
              <p className="text-primary font-semibold line-clamp-2 leading-5 capitalize">
                {title}
              </p>
              <p className="text-sm text-primary/75 mt-1 capitalize">
                {instructorName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoCardItem;
