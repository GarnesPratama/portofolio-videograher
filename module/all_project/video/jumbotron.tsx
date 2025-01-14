import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="-mt-[80px] text-white text-[61px] bg-[url('/all_project/jumbroton_all_project_video.png')] h-96">
      <div className="relative w-full flex justify-center items-center">
        <h1 className="font-forum font-[700] text-[#FFFF] text-[72px] relative mx-auto top-40">
          Project
        </h1>

        <div className="absolute left-[calc(55%+44px)] top-40">
          <img
            src="/all_project/wheel.svg"
            alt="wheel"
            className="w-10 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
