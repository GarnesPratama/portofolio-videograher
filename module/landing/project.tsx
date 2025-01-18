import Cardlanding from "@/components/molecules/card";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="container mx-auto mt-[100px] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto font-forum text-[32px] sm:text-[48px] md:text-[61px] font-[400] text-[#454545]">
          Featured Projects
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-5 grid justify-items-end">
          <a
            className="btn bg-[#E94B26] w-full sm:w-[250px] rounded-3xl flex items-center justify-between px-4 py-2"
            href="/all-project"
          >
            <p className="text-white text-[16px] sm:text-[18px] font-medium">
              See All Projects
            </p>
            <Image
              src={"/Landing/eva_diagonal-arrow-left-up-fill.svg"}
              alt="Arrow"
              width={20}
              height={20}
              className="ml-2"
            />
          </a>
        </div>
      </div>
      <div className="mt-[50px]">
        <Cardlanding />
        <Cardlanding />
      </div>
    </div>
  );
};

export default Project;
