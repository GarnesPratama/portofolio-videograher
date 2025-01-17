import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="-mt-[80px] text-white text-[61px] bg-[url('/all_project/jumbroton_all_project_video.png')] h-96">
      <div className="relative w-full flex justify-center items-center ">
        <div className="flex items-center relative top-40">
          <h1 className="font-forum font-[700] text-[#FFFF] lg:text-[72px] md:text-[60px] text-[48px]">
            Projects
          </h1>
          <img
            src="/all_project/wheel.svg"
            alt="wheel"
            className="lg:w-8 md:w-6 w-4 h-auto ml-2 relative -top-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
