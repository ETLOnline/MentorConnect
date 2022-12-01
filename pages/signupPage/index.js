import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";

const index = () => {
  const [isLogin, setIsLogin] = useState(true);

  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputGamil = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = inputFirstName.current.value;
    const enteredLastName = inputLastName.current.value;
    const enteredGmail = inputGamil.current.value;
    const enteredPassword = inputPassword.current.value;
    const enteredConfirmPassword = inputConfirmPassword.current.value;

    const formData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      gmail: enteredGmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    };

    console.log(formData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex">
          <div className="w-[50%] h-[764px]">
            <img src="./img/Image (15).png" />
          </div>
          <div className="flex flex-col w-[50%]">
            <div className="ml-[auto] mr-[6.198%]">
              <img src="./img/X.png" />
            </div>

            <h1 className="font-semibold text-[36px] text-[#357A7B] mx-auto font-[Raleway] leading-[38px]">
              {isLogin ? "Login" : "Signup"}
            </h1>

            <h1 className="leading-[19px] font-medium mx-auto text-[16px] text-[#1C2D56] mt-[16px] mb-[19px]">
              For All Your Mentoring Needs
            </h1>

            <div className="w-[63.88%] mx-auto h-[26%] flex flex-col justify-between">
              <div className="flex justify-between ">
                <div className="w-[46.52%] group ">
                  <input
                    type="text"
                    className="border-[1px] rounded-[8px] w-full  h-[48px] border-[#1C2D56] placeholder:pl-[10px] "
                    placeholder="First Name"
                    ref={inputFirstName}
                  />
                </div>

                <div className="w-[46.52%]">
                  <input
                    type="text"
                    placeholder="LastName"
                    className=" placeholder:pl-[10px] border-[1px]  rounded-[8px] w-full h-[48px] border-[#1C2D56]"
                    ref={inputLastName}
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter your Email"
                className="border-[1px] placeholder:pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full "
                ref={inputGamil}
              />

              <div className="flex justify-between">
                <input
                  type="Password"
                  placeholder="Password"
                  className="border-[1px]  placeholder:pl-[10px] rounded-[8px]  w-[46.52%] h-[48px] border-[#1C2D56]"
                  ref={inputPassword}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-[1px] placeholder:pl-[10px] rounded-[8px]  w-[46.52%] h-[48px] border-[#1C2D56]"
                  ref={inputConfirmPassword}
                />
              </div>
            </div>

            <div className="mx-auto w-[13.88%] bg-[#1C2D56] h-[36px] rounded-[4px] py-[5px] px-[18px] mt-[32px]">
              <button className="bg-[#1C2D56] text-[white]">
                {isLogin ? "Login" : "signup"}
              </button>
            </div>

            <div className="mt-[16px]">
              <h1 className="leading-[28px] text-[16px] font-medium text-center">
                <button type="button" onClick={switchAuthModeHandler}>
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account"}
                </button>
              </h1>
            </div>

            <div className="w-[32.22%] flex justify-between mx-auto mb-[15.57%] mt-[64px]">
              <img src="./img/Frame 77.png" />
              <img src="./img/Frame 78.png" />
              <img src="./img/Frame 79.png" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default index;
