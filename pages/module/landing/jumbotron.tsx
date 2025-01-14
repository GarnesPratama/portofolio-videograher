import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="-mt-[80px] text-white bg-[url('/Landing/jumbotron.svg')] bg-cover bg-center"
      style={{ height: "calc(100vh + 20px)" }}
    >
      <h1 className="text-center mx-auto pt-[250px] sm:pt-[300px] font-forum leading-tight text-[32px] sm:text-[48px] md:text-[61px] lg:text-[70px] px-4 mb-[500px] sm:mb-[600px]">
        Your Story, <span className="text-[#E94B26]">Brought to Life</span> <br />
        Through Stunning Visuals.
      </h1>
      <div className="flex justify-center">
        <Image
          src={"/Landing/arrow_down.svg"}
          alt="arrow-down"
          width={40}
          height={40}
          className="cursor-pointer sm:w-[50px] sm:h-[50px] animate-bounce"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
