import React from "react";

const InterestsTile = ({ data }) => {
  return (
    <>
      <div className="bg-green-400  flex justify-center font-medium px-5 py-2 rounded-full">
        {data}
      </div>
    </>
  );
};

export default InterestsTile;
