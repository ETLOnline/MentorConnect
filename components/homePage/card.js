import React, { Fragment } from "react";

const Card = ({ Mentors }) => {
  return (
    <Fragment>
      {Mentors && Mentors.length > 0
        ? Mentors.map((mentor) => {
            return (
              <Fragment key={mentor.id}>
                <div id="featuredProducts" className=" mb-8 m-2 w-100">
                  <div className=" px-2 py-11 w-full  ">
                    <div className="relative group">
                      <div className="">
                        <img
                          src={mentor.img}
                          alt="IMG"
                          className="w-[21.11%] h-[53.1%]"
                        />
                      </div>

                      <div className="absolute w-full top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(36,36,36,0.3)] rounded-xl opacity-50 "></div>
                      <div className="flex flex-col w-[90%] ml-4 absolute group-hover:-translate-y-10 group-hover:duration-1000 transition-all duration-1000 top-[286px]  transition-all hover:duration-1000">
                        <div className="flex justify-between mt-1 ">
                          <p className="text-[20px] text-[#FFFFFF] leading-[23px] font-normal font-['Raleway']">
                            {mentor.name}
                          </p>
                          <p className="text-[20px] text-[#FFFFFF] leading-[23px] font-['Raleway']">
                            {mentor.houre}
                          </p>
                        </div>
                        <div className=" flex text-[16px] text-[#FFFFFF] leading-[19px]  font-['Raleway'] mt-3">
                          <div className="h-5 w-5">
                            <img src="./img/icons8-speech-24_1.png" alt="img" />
                          </div>
                          <p>{mentor.title}</p>
                        </div>
                      </div>
                      <div className="absolute w-[12.96%] h-[9%] top-[9px] right-[6%]  ">
                        <img src="./img/Path.png" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })
        : ""}
    </Fragment>
  );
};

export default Card;
