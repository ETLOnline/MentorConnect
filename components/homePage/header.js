import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="bg-gradient-to-l from-[#F8FBFE] to-[rgba(157,213,200,0.9)] w-full">
        <div className="ml-0 xs:ml-[5.44%] grid md:grid-cols-2">
          <div className="text-center xs:text-left">
            <div className=" ">
              <div className="xs:w-[88.52%] mt-[16.03%]">
                <p className="text-[40px] xs:text-[48px] sm:text-[58px] text-[#1C2D56] leading-[50px] sm:leading-[60px] md:leading-[75px] font-[600] sm:font-[700]">
                  Find and Book a Mentor for your 1:1 help today!
                </p>
              </div>

              <p className="font-['Raleway'] text-[20px] sm:text-[24px] mt-[20px] text-[#1C2D56] xs:w-[88%]">
                We have over 200 Mentors available, qualified in over 300
                subjects
              </p>

              <button className=" xs:mb-[50px] h-[39px] w-[40%] xs:w-[25.91%] md:w-[40%] lg:w-[25.91%] border-[#1C2D56] hover:bg-[#1C2D56] rounded-[8px] border-[2px] mt-6">
                <a className="hover:text-white">Find a Mentor</a>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="./img/Ellipse 5.png"
              alt="img"
              className="ml-auto mr-[5.5%] mt-[6.23%] border-[#FFB66A] border-[12px] rounded-[70px] object-cover"
            />
            <img
              src="./img/Ellipse 4.png"
              alt=""
              className=" ml-auto mr-[50.5%]  mt-[-13%] border-[#70C3F9] border-[12px] rounded-[70px] object-cover "
            />
            <img
              src="./img/Image (2).png"
              alt=""
              className=" border-[#6BFFAB] border-[12px] rounded-[95px]  ml-auto mr-[25.5%]  mt-[3%] object-cover"
            />
            <img
              src="./img/Ellipse 6.png"
              alt=""
              className=" border-[#DC8CFF] border-[12px] rounded-[85px]  ml-auto mr-[70.5%]  mt-[-4%] object-cover"
            />
            <img
              src="./img/Ellipse 7.png"
              alt=""
              className=" border-[#ACB0B5] border-[12px] rounded-[85px]  ml-auto mr-[35.5%]  mt-[-3%] object-cover"
            />
            <img
              src="./img/Ellipse 8.png"
              alt=""
              className=" border-[#FFE36A] border-[12px] rounded-[85px]  ml-auto mr-[5.5%]  md:mt-[-55%] lg:mt-[-30%] object-cover"
            />
          </div>
        </div>
        <img
          src="./img/Vector 1.png"
          alt="img"
          className="h-[140.99px] w-full object-cover"
        />
      </div>
    </Fragment>
  );
};

export default Header;
