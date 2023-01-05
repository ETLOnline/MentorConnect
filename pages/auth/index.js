import Link from "next/link";
import React from "react";
import { useRef, useState, useContext } from "react";
import Image from "next/image";

import { loginWithGoogle } from "../../utils_firebase/users";
import { useRouter } from "next/router";
import { useSinup } from "../../hooks/useSignup";
import { useSinin } from "../../hooks/useSignin";
import { AuthContext } from "../../contexts/auth_context";
const Index = () => {
  const { setUser } = useContext(AuthContext);

  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputGamil = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  const { signup, error, isPanding } = useSinup();
  const { signin, errors } = useSinin();
  let formData;

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
    return "toggle";
  }

  function submitHandler(event) {
    event.preventDefault();

    if (isLogin) {
      const enteredGmail = inputGamil.current.value;
      const enteredPassword = inputPassword.current.value;
      formData = {
        gmail: enteredGmail,
        password: enteredPassword,
      };
      console.log(formData);
      // LoginWithEmailPassword(formData, router);
      signin(formData, router);
    }

    if (!isLogin) {
      const enteredFirstName = inputFirstName.current.value;
      const enteredLastName = inputLastName.current.value;
      const enteredGmail = inputGamil.current.value;
      const enteredPassword = inputPassword.current.value;
      const enteredConfirmPassword = inputConfirmPassword.current.value;

      formData = {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        gmail: enteredGmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
      };
      // SignupWithEmailPassword(formData, router);
      console.log(formData);
      signup(formData, router);
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex">
          <div className="relative w-[50%] h-[764px]">
            <Image
              src="/img/Image (15).png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <Link className="ml-[auto] mr-[6.198%]" href="/">
              <Image
                src="/img/X.png"
                alt=""
                width={48}
                height={48}
                className="object-cover"
              />
            </Link>

            <h1 className="font-semibold text-[36px] text-[#357A7B] mx-auto font-[Raleway] leading-[38px]">
              {isLogin ? "Login" : "Signup"}
            </h1>

            <h1 className="leading-[19px] font-medium mx-auto text-[16px] text-[#1C2D56] mt-[16px] mb-[19px]">
              For All Your Mentoring Needs
            </h1>

            <div className="w-[63.88%] mx-auto h-[26%] flex flex-col group ">
              <div className="flex justify-between ">
                <div className="w-[46.52%]  ">
                  {isLogin ? (
                    ""
                  ) : (
                    <div>
                      <input
                        type="text"
                        className="border-[1px] rounded-[8px] w-full  h-[48px] border-[black]  group group-focus-within:border-[#1C2D56] outline-none pl-[16px] text-[16px] font-semibold "
                        ref={inputFirstName}
                      />
                      <label className="relative px-[4px] bottom-[35px] left-[12px] text-[black] group-focus-within:bottom-[60px] bg-[white] group-focus-within:text-[#1C2D56] group text-[16px] font-medium">
                        First Name
                      </label>
                    </div>
                  )}
                </div>
                <div className="w-[46.52%] group ">
                  {isLogin ? (
                    ""
                  ) : (
                    <div>
                      <input
                        type="text"
                        className="border-[1px] rounded-[8px] w-full  h-[48px] border-[black]  group group-focus-within:border-[#1C2D56] outline-none pl-[16px] text-[16px] font-semibold "
                        ref={inputLastName}
                      />
                      <label className="relative px-[4px] bottom-[35px] left-[12px] text-[black] group-focus-within:bottom-[60px] bg-[white] group-focus-within:text-[#1C2D56] group text-[16px] font-medium">
                        Last Name
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div className="group">
                <input
                  type="text"
                  className="border-[1px]  border-[black] h-[48px] rounded-[8px] w-full group group-focus-within:border-[#1C2D56] outline-none pl-[16px] text-[16px] font-semibold "
                  ref={inputGamil}
                />
                <label className="relative px-[4px] bottom-[35px] left-[12px] text-[black] group-focus-within:bottom-[60px] bg-[white] group-focus-within:text-[#1C2D56] group text-[16px] font-medium">
                  Enter Your Email
                </label>
              </div>

              <div className="flex justify-between">
                {isLogin ? (
                  ""
                ) : (
                  <div className="w-[46.52%] group">
                    <input
                      type="Password"
                      className="border-[1px]  border-[black] h-[48px] rounded-[8px] w-full group group-focus-within:border-[#1C2D56] outline-none pl-[16px] text-[16px] font-semibold"
                      ref={inputPassword}
                    />
                    <label className="relative px-[4px] bottom-[35px] left-[12px] text-[black] group-focus-within:bottom-[60px] bg-[white] group-focus-within:text-[#1C2D56] group text-[16px] font-medium">
                      Password
                    </label>
                  </div>
                )}

                {isLogin ? (
                  <div className="w-full group">
                    <input
                      type="Password"
                      className="border-[1px]  border-[black] h-[48px] rounded-[8px] w-full group group-focus-within:border-[#1C2D56] outline-none pl-[16px] text-[16px] font-semibold"
                      ref={inputPassword}
                    />
                    <label className="relative px-[4px] bottom-[35px] left-[12px] text-[black] group-focus-within:bottom-[60px] bg-[white] group-focus-within:text-[#1C2D56] group text-[16px] font-medium">
                      Password
                    </label>
                  </div>
                ) : (
                  <div className="w-[46.52%] group">
                    <input
                      type="Password"
                      className="border-[1px]  border-[black] h-[48px] rounded-[8px] w-full group group-focus-within:border-[#1C2D56] outline-none pl-[16px] text-[16px] font-semibold"
                      ref={inputConfirmPassword}
                    />
                    <label className="relative px-[4px] bottom-[35px] left-[12px] text-[black] group-focus-within:bottom-[60px] bg-[white] group-focus-within:text-[#1C2D56] group text-[16px] font-medium">
                      Password
                    </label>
                  </div>
                )}
              </div>
            </div>

            <div className="mx-auto w-[14.85%] bg-[#1C2D56]  rounded-[4px] py-[5px] flex mt-[32px]">
              {!isPanding && (
                <button className="bg-[#1C2D56] m-auto text-center text-[white]">
                  {isLogin ? "Login" : "Signup"}
                </button>
              )}
              {isPanding && (
                <button className="bg-[#1C2D56] ml-3 text-[white] disabled">
                  {/* {isLogin ? "Login" : "Signup"} */}loading
                </button>
              )}
            </div>
            {error && (
              <p className="leading-[28px] text-[16px] font-medium text-center">
                {error}
              </p>
            )}
            {errors && (
              <p className="leading-[28px] text-[16px] font-medium text-center">
                {errors}
              </p>
            )}

            <div className="mt-[16px]">
              <h1 className="leading-[28px] text-[16px] font-medium text-center">
                <button type="button" onClick={switchAuthModeHandler}>
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account LogIn"}
                </button>
              </h1>
            </div>

            <div className="w-[32.22%] flex justify-between mx-auto mb-[15.57%] mt-[64px]">
              <div
                onClick={() => loginWithGoogle(router, setUser)}
                className="relative h-[52px] w-[52px]"
              >
                <Image
                  src="/img/Frame 77.png"
                  alt="img"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[52px] w-[52px]">
                <Image
                  src="/img/Frame 78.png"
                  alt="img"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[52px] w-[52px]">
                <Image
                  src="/img/Frame 79.png"
                  alt="img"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Index;
