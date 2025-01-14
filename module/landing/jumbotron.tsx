import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="-mt-[80px] text-white text-[61px] bg-[url('/Landing/jumbotron.svg')] h-screen">
      <h1 className="text-center mx-auto pt-[300px] font-forum">
        Your Story, <span className=" text-[#E94B26]">Brought to Life</span>{" "}
        <br />
        Through Stunning Visuals.
      </h1>
      <div>
        <Image
          src={"/Landing/arrow_down.svg"}
          alt="arrow-down"
          width={50}
          height={50}
          className="mx-auto mt-[150px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
