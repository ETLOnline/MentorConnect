import React from "react";
import IntrestsTile from "../../components/tiles/intrestsTile";

const SessionDetail = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[40%] h-[110vh] ">
          <div className="border-[2px] m-[40px] rounded-[20px]">
            <img
              src="/img/Image (11).png"
              className="h-[80vh] w-[80%] mx-auto my-[20px] "
            />
          </div>
        </div>
        <div className="w-[55%] mx-4 py-5">
          <div>
            <div className="border-b-[2px]  flex ">
              {/* <h1 className=" font-bold text-[#1C2D56] text-[25px]">Title:</h1> */}
              <h1 className="font-bold text-[25px] text-[#1C2D56]">
                Making EveryThing
              </h1>
            </div>
            <div className="grid grid-cols-7 gap-5 my-4 pb-5 border-b-[2px]">
              <IntrestsTile />
              <IntrestsTile />
              <IntrestsTile />
              <IntrestsTile />
              <IntrestsTile />
              <IntrestsTile />
              <IntrestsTile />
              <IntrestsTile />
              <IntrestsTile />
            </div>

            <div className="border-b-[2px]">
              <div className="flex justify-between border-[2px] rounded-[10px] mb-[20px] p-[10px]">
                <div className="flex">
                  <img src="/img/Ellipse 15.png" />
                  <h1 className="font-bold ml-[15px] text-[#1C2D56]">
                    James Dean
                  </h1>
                </div>
                <button className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl">
                  Follow
                </button>
              </div>
            </div>
            <div className="border-b-[2px] p-5 flex justify-around ">
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px]">CoachingPoints</h1>
                <h1 className="font-bold m-auto text-[30px]">100</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px]">LearningPoints</h1>
                <h1 className="font-bold m-auto text-[30px]">100</h1>
              </div>
            </div>

            <div className="border-b-[2px] p-5 ">
              <p>Timing</p>
              <div className="flex justify-between ">
                <p className="text-[12px] leading-[14px] font-medium text-[#8B8B8B] group-hover:text-green-800">
                  6/11/2022 - 3PM
                </p>
                <p className="text-[12px] leading-[14px] font-medium text-[#8B8B8B] group-hover:text-green-800">
                  6/11/2022 - 3PM
                </p>
              </div>
            </div>

            <div className="p-5">
              <div className="w-[63.63%]  bg-[#E6E5E5] p-[30px]  mx-auto  flex justify-center">
                <p className="text-[40px] leading-[18px] text-[#1C2D56] m-auto">
                  Register Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[60%] m-auto">
          <div className="w-[90] flex justify-center">
            <h1 className="font-semibold text-[30px] text-[#1C2D56] ">
              Attendees
            </h1>
          </div>
          <div className="flex flex-col w-[90%] mx-auto my-[10px] px-[10px] border-[2px] rounded-[10px]  ">
            <div className="">
              <div className="flex justify-between border-[2px] rounded-[10px] my-[20px] p-[10px]">
                <div className="flex ">
                  <img src="/img/Ellipse 15.png" />
                  <h1 className="font-bold ml-[15px] text-[#1C2D56]">
                    James Dean
                  </h1>
                </div>
                <button className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl">
                  Follow
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between border-[2px] rounded-[10px] mb-[20px] p-[10px]">
                <div className="flex">
                  <img src="/img/Ellipse 15.png" />
                  <h1 className="font-bold ml-[15px] text-[#1C2D56]">
                    James Dean
                  </h1>
                </div>
                <button className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl">
                  Follow
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between border-[2px] rounded-[10px] mb-[20px] p-[10px]">
                <div className="flex">
                  <img src="/img/Ellipse 15.png" />
                  <h1 className="font-bold ml-[15px] text-[#1C2D56]">
                    James Dean
                  </h1>
                </div>
                <button className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionDetail;
