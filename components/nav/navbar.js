import Link from "next/link";
import { useSignout } from "../../hooks/useSignout";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/auth_context";
import { useContext } from "react";

export default function NavBar() {
  const { user } = useContext(AuthContext);

  const { signout, error, isPanding } = useSignout();
  const router = useRouter();

  return (
    <div>
      <div className="bg-[#fff] ">
        <div className="sm:flex mx-[60px] py-1  gap-[10px]  ">
          <div className="w-56 bg-[#E6E5E5] h-16 flex">
            <div className="m-auto">Logo</div>
          </div>
          <div className="flex  left-11  ">
            <div className="">
              <p className="font-['Raleway']  text-[16px] leading-5 m-[22px]">
                Find a Mentor
              </p>
            </div>
            <div className="text-[16px]">
              <p className="font-['Raleway'] text-[16px] leading-5 m-[22px]">
                About us
              </p>
            </div>
            <div className="text-[16px]">
              <p className="font-['Raleway'] text-[16px] leading-5 m-[22px]">
                Pricing
              </p>
            </div>
            <div className="text-[16px]">
              <p className="font-['Raleway']  text-[16px] leading-5 m-[22px]">
                Become a Mentor
              </p>
            </div>
          </div>
          <div className=" flex ml-auto items-center">
            {!user.user && (
              <button className=" h-[36px] w-24 bg-[#1C2D56] rounded group  hover:bg-[#fff]">
                <Link
                  className="text-[#fff] font-['Raleway'] group-hover:text-[#1C2D56]"
                  href="/auth"
                >
                  Sign Up
                </Link>
              </button>
            )}

            {/* <button className=" h-[36px] w-24 bg-[#1C2D56] rounded group  hover:bg-[#fff]">
              <Link
                className="text-[#fff] font-['Raleway'] group-hover:text-[#1C2D56]"
                href="/loginPage"
              >
                Log In
              </Link>
            </button> */}
            {user.user && (
              <>
                <div className="font-medium leading-7 text-[#919191]">
                  <Link
                    href={`/auth/${user.user.uid}`}
                    className="hover:text-[#1C2D56] px-3"
                  >
                    Porfile
                  </Link>
                </div>
                <button
                  onClick={() => signout(router)}
                  className=" h-[36px] w-24 bg-[#1C2D56] rounded group  hover:bg-[#fff]"
                >
                  <Link
                    className="text-[#fff] font-['Raleway'] group-hover:text-[#1C2D56]"
                    href="/loginPage"
                  >
                    Log Out
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
