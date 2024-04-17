import React, { Fragment } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import CustomButton from "../ui/custom/custom-button";

const FindMentor = () => {
  return (
    <div className="gradient-bg text-primary text-center flex flex-col w-full px-6">
      <div className="mx-auto pt-[32px] xs:pt-[64px]">
        <h1 className="text-[32px] xs:text-[40px] leading-[47px] font-bold">
          Helping the world one Mentor at a time
        </h1>
      </div>
      <div className="mx-auto pt-[24px] xs:pt-[42px]">
        <p className="text-[18px] xs:text-[24px] leading-[28px] text-center ">
          Sifting through the overwhelming content on the internet will slow you
          down. Break through the
          <br />
          noise and get specific advice directly from the experts
        </p>
      </div>

      <div className="flex justify-center py-20" >
        <CustomButton variant="outline" icon={<ArrowRightIcon />}>
          Find a Mentor
        </CustomButton>
      </div>
    </div>
  );
};

export default FindMentor;
