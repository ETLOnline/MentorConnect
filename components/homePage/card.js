import React, { Fragment } from "react";
import { BsChat } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const Card = ({ mentors }) => {
  // console.log(mentors, "card");
  // console.log("Check");

  return (
    <Fragment>
      {mentors && mentors.length > 0
        ? mentors.map((mentor) => {
          return (
            <Link key={mentor.id} href={`/auth/${mentor.id}`}>
              <Fragment>
                <div id="featuredProducts" className=" mb-8 mx-2 w-100 ">
                  <div className="pt-[28px]  w-full  ">
                    <div className="relative group rounded-[12px] w-[100%]">
                      <div
                        className="h-[330px] w-[100%] rounded-[12px] bg-no-repeat bg-cover"
                        style={{
                          backgroundImage:
                            "url(" + mentor.summry?.image + ")",
                        }}
                      ></div>

                      <div className="absolute w-full rounded-xl top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(36,36,36,0)] opacity-50 "></div>
                      <div className="font-montserrat flex flex-col w-[90%] ml-4 absolute group-hover:-translate-y-16 group-hover:duration-1000 transition-all duration-1000 top-[286px] hover:duration-1000">
                        <div className="flex justify-between mt-[8px] ">
                          <p className="text-base text-[#FFFFFF] leading-[23px] line-clamp-1 h-6 w-[70%] font-semibold capitalize">
                            {mentor.summry?.displayName}
                          </p>
                          <p className="text-base  text-[#FFFFFF] leading-[23px] w-[30%] font-semibold">
                            {200} +Hrs
                          </p>
                        </div>
                        <div className="flex gap-2 text-[16px] text-[#FFFFFF] mt-2">
                          <div className="h-6 w-6 pt-0.5" >
                            <BsChat />
                          </div>
                          <p className="text-sm line-clamp-2 capitalize">
                            {mentor.about || mentor.summry?.displayName}
                          </p>
                        </div>
                      </div>

                      <div className="absolute w-[36px] h-[9%] top-[9px] right-[6%] bg-[url('/img/Path.png')] bg-no-repeat hover:bg-[url('/img/redPath.svg')] "></div>
                    </div>
                  </div>
                </div>
              </Fragment>
            </Link>
          );
        })
        : ""}
    </Fragment>
  );
};

export default Card;
