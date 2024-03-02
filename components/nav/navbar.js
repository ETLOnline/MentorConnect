import Link from "next/link";
import { useSignout } from "../../hooks/useSignout";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/auth_context";
import { useContext, useState } from "react";
import Image from "next/image";
import { GrUserSettings } from "react-icons/gr";
import ThemeModeToggle from "../ui/custom/theme-mode-toggle.tsx";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { signout, error, isPanding } = useSignout();
  const router = useRouter();

  let admin;

  if (user.user.role === "superAdmin" || user.user.role === "admin") {
    admin = true;
  }

  // if(user)
  return (
    <header className="sticky top-0 shadow-sm z-10" >
      <div className="bg-[#fff] w-full">
        <div className="lg:mx-[60px] py-1 flex items-center justify-between">
          <Link href="/" className="min-w-[100px]">
            <div className="relative h-16 flex">
              <Image
                src="/img/logo.png"
                alt="logo image"
                width={100}
                height={100}
              />
            </div>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="absolute text-3xl right-8 top-6 cursor-pointer md:hidden"
          >
            <Image
              src={"/img/menu.png"}
              alt="img"
              height={30}
              width={30}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:flex-row gap-4">
            {user.user ? (
              <div className="flex items-center gap-4">
                {/* Home Button */}
                <Link className="nav-item" href="/home" >Home</Link>
                <Link className="nav-item" href="/auth/sessionForm">Create Session</Link>
                <Link className="nav-item" href="/calender">Calendar</Link>

                {/* Nav DropDown Comming Soon */}
                <div className="relative group">
                  <p className="nav-item after:!bg-transparent" >Coming Soon</p>
                  <div className="hidden group-hover:block group-hover:absolute group-hover:top-7 group-hover:left-0">
                    <div className="px-2 pt-2 pb-4 bg-gray-50 rounded-[5px] shadow-lg">
                      <div className="flex flex-col gap-4">
                        <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                          Recommendations
                        </div>
                        <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                          Find Learning
                        </div>
                        <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                          Request a Session
                        </div>
                        <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                          Invite
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link className="nav-item" href="/" >About us</Link>
                <Link className="nav-item" href="/" >Pricing</Link>
                <Link className="nav-item" href="/" >Become a Mentor</Link>
                <Link className="nav-item" href="/" >Contact</Link>
              </>
            )}
            <Link className="nav-item" href="/">Find a Mentor</Link>
          </div>

          <div className="hidden md:flex gap-4">

            <ThemeModeToggle />

            <div className="flex gap-9 ">
              {!user.user && (
                <div className="">
                  <div className=" flex justify-center items-center">
                    <button className=" hover:font-bold text-center h-[36px] w-32 md:w-24  rounded group  hover:bg-[#fff]">
                      <Link
                        className="text-[#909090] group-hover:text-primary"
                        href="/auth"
                      >
                        Sign Up
                      </Link>
                    </button>
                  </div>
                </div>
              )}
              {!user.user && (
                <Link
                  className="text-[#fff] hover:text-primary  "
                  href="/loginPage"
                >
                  <button className=" h-[36px] w-24 bg-[#1C2D56] rounded group hover:font-bold hover:bg-[#E6E5E5]">
                    Log In
                  </button>
                </Link>
              )}
            </div>

            {user.user && (
              <div className="flex justify-center gap-[10px] items-center">
                <div className="relative group">
                  <div className="border-[1.5px] border-primary rounded-full flex justify-center items-center p-2" >
                    <GrUserSettings className="w-4 h-4 font-bold" />
                  </div>

                  <div className="hidden group-hover:block group-hover:absolute group-hover:-bottom-36 group-hover:right-0">
                    <div className="px-2 pt-2 pb-4 bg-gray-50 rounded-[5px] shadow-lg">
                      <div className="flex w-[175px] flex-col gap-3">
                        <div className="font-medium leading-7  text-[#919191]">
                          <Link
                            href={`/auth/${user.user.uid}`}
                            className="hover:text-primary px-3"
                          >
                            Porfile
                          </Link>
                        </div>

                        <div className="font-medium leading-7 text-[#919191]">
                          <Link
                            href={`/updatePassword`}
                            className="hover:text-primary px-3"
                          >
                            change password
                          </Link>
                        </div>

                        {admin && (
                          <div className="font-medium leading-7 text-[#919191]">
                            <Link
                              href={`/admin`}
                              className="hover:text-primary px-3"
                            >
                              Admin Panel
                            </Link>
                          </div>
                        )}

                        <div className="flex justify-end" >
                          <button
                            onClick={() => { signout(router); router.push('/loginPage'); }}
                            className=" h-[36px] w-24 bg-[#1C2D56] rounded group hover:border hover:bg-[#E6E5E5] text-white hover:text-primary"
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`fixed z-50 bg-white w-full min-h-screen top-0 flex flex-col justify-between p-6 ${open ? "left-0 transition-all ease-in" : "-left-full transition-all ease-out"}`}>
          <div>
            <div className="flex justify-between items-center mb-6" >
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  className="h-16"
                  src="/img/logo.png"
                  alt="logo image"
                  width={100}
                  height={100}
                />
              </Link>

              <Image
                onClick={() => setOpen(false)}
                src={"/img/X.png"}
                alt="img"
                height={30}
                width={30}
              />
            </div>

            <div className="flex flex-col gap-4 px-4" >
              {user.user ? (
                <div className="flex flex-col gap-4">
                  {/* Home Button */}
                  <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/home" >Home</Link>
                  <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/auth/sessionForm">Create Session</Link>
                  <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/calender">Calendar</Link>

                  {/* Nav DropDown Comming Soon */}
                  <div className="relative group">
                    <p className="nav-item text-lg ">Coming Soon</p>
                    <div className="hidden group-hover:block group-hover:absolute group-hover:top-7 group-hover:right-2">
                      <div className="px-2 pt-2 pb-4 bg-gray-50 rounded-[5px] shadow-lg">
                        <div className="flex flex-col gap-4">
                          <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                            Recommendations
                          </div>
                          <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                            Find Learning
                          </div>
                          <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                            Request a Session
                          </div>
                          <div className="hover:text-primary hover:bg-blue-50 px-3 cursor-pointer">
                            Invite
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/" >About us</Link>
                  <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/" >Pricing</Link>
                  <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/" >Become a Mentor</Link>
                  <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/" >Contact</Link>
                </>
              )}
              <Link className="nav-item text-lg " onClick={() => setOpen(false)} href="/">Find a Mentor</Link>
            </div>
          </div>

          <div>
            {!user.user && (
              <div className="flex justify-center items-center gap-9">
                <button className=" hover:font-bold text-center h-[36px] w-32 md:w-24  rounded group  hover:bg-[#fff]">
                  <Link
                    className="text-[#909090] group-hover:text-primary"
                    href="/auth"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Link>
                </button>

                <Link
                  className="text-[#fff] hover:text-primary "
                  href="/loginPage"
                  onClick={() => setOpen(false)}
                >
                  <button className=" h-[36px] w-24 bg-[#1C2D56] rounded group hover:font-bold hover:bg-[#E6E5E5]">
                    Log In
                  </button>
                </Link>
              </div>
            )}

            {user.user && (
              <div className="flex gap-[10px] items-center">
                <div className="relative group">
                  <div className="border-[1.5px] border-primary rounded-full flex justify-center items-center p-4" >
                    <GrUserSettings className="w-7 h-7" />
                  </div>

                  <div className="hidden group-hover:block group-hover:absolute group-hover:-top-36 group-hover:left-10">
                    <div className="px-2 pt-2 pb-4 bg-gray-50 rounded-[5px] shadow-lg">
                      <div className="flex w-[175px] flex-col gap-3">
                        <div className="font-medium leading-7  text-[#919191]">
                          <Link
                            href={`/auth/${user.user.uid}`}
                            className="hover:text-primary px-3"
                          >
                            Porfile
                          </Link>
                        </div>

                        <div className="font-medium leading-7 text-[#919191]">
                          <Link
                            href={`/updatePassword`}
                            className="hover:text-primary px-3"
                          >
                            change password
                          </Link>
                        </div>

                        {admin && (
                          <div className="font-medium leading-7 text-[#919191]">
                            <Link
                              href={`/admin`}
                              className="hover:text-primary px-3"
                            >
                              Admin Panel
                            </Link>
                          </div>
                        )}

                        <div className="flex justify-end" >
                          <button
                            onClick={() => { signout(router); router.push('/loginPage'); }}
                            className=" h-[36px] w-24 bg-[#1C2D56] rounded group hover:border hover:bg-[#E6E5E5] text-white hover:text-primary"
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
