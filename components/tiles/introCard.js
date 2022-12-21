import Link from "next/link";
import React, { useState } from "react";
import { storage } from "../../utils_firebase/config";

import updateImage, { getSingleUser } from "../../utils_firebase/users";
const IntroCard = ({ data }) => {
  //upload file
  const [file, setFile] = useState(null);
  const [fileSelect, setFileSelect] = useState(false);
  const [Url, setURL] = useState("");

  function handleChange(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setFile(file);
    setFileSelect(true);
  }

  async function handleUpload() {
    if (file) {
      console.log("chal raya aa");
      const path = `/images/${file.name}`;
      const ref = storage.ref(path);
      await ref.put(file);
      const url = await ref.getDownloadURL();
      setURL(url);
      console.log(url, "sasasa", Url);
      updateImage(url, data.uid);
      setFile(null);
      setFileSelect(false);
    }
  }

  //upload file end

  return (
    <>
      <div className=" bg-white w-[81.25%]  flex flex-col  m-auto justify-between rounded-[12px] shadow-lg border-[1px] ">
        <div className="w-[46.5%] mt-[40px] mx-auto ">
          <img
            src={Url ? Url : data?.summry.image}
            className="rounded-[96%] h-[192px] w-full object-cover"
          />

          <div className="relative bottom-[50px] left-[115px] w-[25px] rounded-[15px]">
            {!fileSelect ? (
              <label type="file">
                <img
                  src="/img/editIcon.png"
                  className="bg-[#646464] rounded-[15px] opacity-[0.3] object-cover"
                ></img>
                <input
                  type="file"
                  onChangeCapture={handleChange}
                  className="hidden"
                />
              </label>
            ) : (
              <p onClick={handleUpload}>
                <img
                  src="/img/upload.svg"
                  className="rounded-[6px] object-cover"
                ></img>
              </p>
            )}
          </div>
        </div>
        <div className="">
          <Link
            className="w-[37%] h-[24px] flex mx-auto justify-evenly mb-8"
            href="/auth/profile"
          >
            <button>
              <img src="/img/2ndPath.png" className="object-cover" />
            </button>
            <p className="text-[12px] mt-[5px] leading-[14px] font-semibold text-[#646464]">
              Update Profile
            </p>
          </Link>
        </div>
        <div className="w-[84.61%] mx-auto flex justify-between mb-[32px]">
          <p className="text-[24px] leading-[28px] font-semibold">
            {data?.summry?.displayName}
          </p>
          <button className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl">
            Follow
          </button>
          <Link href="/auth/sessionForm">
            <button className="w-[74px] h-[26px] border-[1px] text-[#1C2D56] text-[10px] font-medium rounded-xl">
              Create Session
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex mx-auto w-[69.5%] justify-between">
            <p className="text-[32px] font-semibold leading-[38px] text-[#1C2D56] text-center">
              {data?.followers?.length}
            </p>
            <p className="text-[32px] leading-[38px] font-semibold text-[#1C2D56] text-center">
              {data
                ? data?.points?.coachingPoint + data?.points?.learningPoint
                : ""}
            </p>
          </div>

          <div className="flex w-[70%] ml-[45px] justify-between">
            <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
              Followers
            </p>
            <p className="text-[20px] leading-[23px] text-center text-[#1C2D56]">
              Points
            </p>
          </div>
        </div>

        <div className="w-[48.07%] flex mx-auto justify-between mb-[32px] mt-[40px]">
          <img src="/img/LinkedIn.png" className="object-cover" />
          <img src="/img/Discord.png" className="object-cover" />
          <img src="/img/Github.png" className="object-cover" />
          <img src="/img/Twitter (1).png" className="object-cover" />
        </div>
      </div>
    </>
  );
};
export default IntroCard;
