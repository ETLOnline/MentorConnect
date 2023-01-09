import React, { Fragment } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MyMentorsCard from "./myMentorsCard";

const MyMentor = () => {
  return (
    <>
      <div className="my-[64px]">
        <div className="flex justify-between  mb-[30px] mx-[210px]">
          <h2 className="text-3xl   font-bold"> MyMentors</h2>
          <div className="flex gap-2 justify-between items-center ">
            <p className="text-[20px] text-[#909090] leading-[23px] ">
              Explore
            </p>
            <div className="bg-[url('/img/Arrow.png')] w-6 h-6 bg-no-repeat hover:bg-[url('/img/Group.svg')] bg-center hover:transition-all hover:translate-x-1 hover:duration-200"></div>
          </div>
        </div>
        <div className="flex mx-[210px]  gap-8">
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
        </div>
      </div>
    </>
  );
};

export default MyMentor;
