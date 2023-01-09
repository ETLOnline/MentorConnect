import Link from "next/link";
import { useSignout } from "../../hooks/useSignout";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/auth_context";
import { useContext, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const { signout, error, isPanding } = useSignout();
  const router = useRouter();

  return (
    <header>
      <div>
        <div className="bg-[#fff]  w-full">
          <div className="md:flex mx-[60px] py-1  gap-[10px]  ">
            <Link href="/" className="w-[20.63%] min-w-[100px]">
              <div className=" relative   h-16 flex">
                {/* <img src="/img/logo.png" className="mx-auto object-cover"></img> */}
                <Image
                  src="/img/logo.png"
                  alt="logo image"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="absolute text-3xl right-8 top-6 cursor-pointer md:hidden"
            >
              <Image
                src={open ? "/img/X.png" : "/img/menu.png"}
                alt="img"
                height={30}
                width={30}
              />
            </div>
            <div
              className={` md:flex md:items-center md:w-full md:justify-between left-0 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1]  w-full  md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open
                  ? "top-15 sm:visible left-0 ml-0 opacity-100"
                  : "top-[-490px] sm:invisible md:visible"
              } `}
            >
              <div className="flex flex-col md:flex-row ">
                <div className=" md:w-auto mx-auto md:border-0">
                  <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] mt-[20px] cursor-pointer">
                    Find a Mentor
                  </p>
                </div>
                {user.user ? (
                  <>
                    <div className=" text-[16px] md:w-auto mx-auto  md:border-0">
                      <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] cursor-pointer">
                        Recommendations
                      </p>
                    </div>
                    <div className=" text-[16px] md:w-auto mx-auto  md:border-0">
                      <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] cursor-pointer">
                        Find Learning
                      </p>
                    </div>
                    <div className=" text-[16px] md:w-auto mx-auto  md:border-0">
                      <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] cursor-pointer">
                        Request a Session
                      </p>
                    </div>
                    <div className=" text-[16px] md:w-auto mx-auto  md:border-0">
                      <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] cursor-pointer">
                        Invite
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" text-[16px] md:w-auto mx-auto  md:border-0">
                      <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] cursor-pointer">
                        About us
                      </p>
                    </div>
                    <div className=" text-[16px] md:w-auto mx-auto  md:border-0">
                      <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] cursor-pointer">
                        Pricing
                      </p>
                    </div>
                    <div className=" text-[16px] md:w-auto mx-auto  md:border-0">
                      <p className="text-center hover:font-medium font-['Raleway'] text-[16px] md:text-[15px] lg:text-[16px] leading-5 md:m-[10px] m-[16px] cursor-pointer">
                        Become a Mentor
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="flex gap-9 ">
                {!user.user && (
                  <div className="">
                    <div className=" flex justify-center items-center">
                      <button className=" hover:font-bold text-center h-[36px] w-32 md:w-24  rounded group  hover:bg-[#fff]">
                        <Link
                          className="text-[#909090] font-['Raleway'] group-hover:text-[#1C2D56]"
                          href="/auth"
                        >
                          Sign Up
                        </Link>
                      </button>
                    </div>
                  </div>
                )}
                {!user.user && (
                  <button className=" h-[36px] max-w-24 bg-[#1C2D56] rounded group  hover:bg-[#E6E5E5]">
                    <Link
                      className="text-[#fff] font-['Raleway'] group-hover:text-[#1C2D56]"
                      href="/loginPage"
                    >
                      Log In
                    </Link>
                  </button>
                )}
              </div>

              {user.user && (
                <div className="flex justify-center gap-[10px] items-center">
                  <div className="font-medium leading-7  text-[#919191]">
                    <Link
                      href={`/auth/${user.user.uid}`}
                      className="hover:text-[#1C2D56] px-3"
                    >
                      Porfile
                    </Link>
                  </div>
                  <button
                    onClick={() => signout(router)}
                    className=" h-[36px] w-24 bg-[#1C2D56] rounded group hover:border hover:bg-[#E6E5E5]"
                  >
                    <Link
                      className="text-[#fff] font-['Raleway'] group-hover:text-[#1C2D56]"
                      href="/loginPage"
                    >
                      Log Out
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
