import React from "react";

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-[100%] h-[100vh] bg-black bg-opacity-75 z-10"
        onClick={onConfirm}
      ></div>
      <div className="bg-white rounded-2xl fixed top-[30vh] left-[10%] w-[80%] md:left-[calc(50%-20rem)] md:w-[40%] z-50 overflow-hidden ">
        <header className="bg-gradient-to-r from-cyan-600 to-blue-400 p-[1rem] ">
          <h2 className="m-0 text-white font-bold text-[24px] ">{title}</h2>
        </header>
        <div className="p-[1rem]">
          <p>{message}</p>
        </div>
        <footer className="p-[1rem] flex justify-end ">
          <button
            className=" text-white py-[0.25rem] px-[1rem] border-[1px] border-solid border-[#4f005f] hover:bg-[#741188] bg-gradient-to-r from-cyan-600 to-blue-400"
            onClick={onConfirm}
          >
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
