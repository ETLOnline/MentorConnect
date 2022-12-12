import Link from "next/link";

export default function NavBar() {
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
            <div className="font-['Raleway'] font-medium leading-7 text-[#919191] ">
              <Link className="hover:text-[#1C2D56] px-3" href="/signupPage">
                Sign Up
              </Link>
            </div>
            <button className=" h-[36px] w-24 bg-[#1C2D56] rounded group  hover:bg-[#fff]">
              <Link
                className="text-[#fff] font-['Raleway'] group-hover:text-[#1C2D56]"
                href="/loginPage"
              >
                Log In
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
