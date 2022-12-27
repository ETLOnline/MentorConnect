import React from "react";

const RecomendedSessionsCard = ({ data }) => {
  console.log(data, "RecomendedSessionsCard");
  return (
    <>
      <div className="flex flex-col gap-3 bg-[#F4F4F4] rounded-[12px]">
        <img src={data.image} alt="" />
        <div className="flex flex-col gap-3 mx-3">
          <div className="flex flex-row justify-between">
            <p className="text-[16px] font-medium leading-[19px] font-['Raleway'] text-[#8B8B8B]">
              {data.students.length} Attendance
            </p>
            <p className="text-[16px] font-medium leading-[19px] font-['Raleway'] text-[#8B8B8B]">
              {new Date(data.startTime.seconds * 1000).toLocaleDateString()}
            </p>
          </div>
          <div className="">
            <p className="text-[24px] leading-[28px] font-normal font-['Raleway'] text-black">
              {data.title}
            </p>
          </div>
          <div className="flex pb-2 gap-2">
            <img
              src={data.instructor.summry.image}
              alt="img"
              className="rounded-[12px]"
            />
            <p className="text-[16px] font-['Raleway'] leading-[19px] font-medium text-[#8B8B8B] pt-2">
              {data.instructor.summry.displayName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecomendedSessionsCard;
