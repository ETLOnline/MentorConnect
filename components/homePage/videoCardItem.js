import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

const VideoCardItem = ({ link, title, instructorName, instructorImage }) => {
  const nameWords = instructorName.split(' ');

  return (
    <Card>
      <div className="w-full flex flex-col rounded-[12px] overflow-hidden font-montserrat">
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
              <Avatar className='h-9 w-9'>
                <AvatarImage className='' src={instructorImage} />
                <AvatarFallback className="text-xs">{nameWords[0].charAt(0)} {nameWords[nameWords.length - 1].charAt(0)}</AvatarFallback>
              </Avatar>
            </div>

            <div className="w-[85%]">
              <p className="text-text font-semibold line-clamp-2 leading-5 capitalize">
                {title}
              </p>
              <p className="text-sm text-text/75 mt-1 capitalize">
                {instructorName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCardItem;
