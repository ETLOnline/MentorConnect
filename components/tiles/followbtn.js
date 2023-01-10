import React from "react";

const Followbtn = ({ fn }) => {
  return (
    <button
      className="w-[74px] h-[3.39vh] border-[1px] text-[#1C2D56] text-[16px] font-medium rounded-xl"
      onClick={fn}
    >
      Follow
    </button>
  );
};

export default Followbtn;
