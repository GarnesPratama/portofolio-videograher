import Cardlanding from "@/components/molecules/card";
import Image from "next/image";
import React from "react";
import Expertise from "./expertise";

const Project = () => {
  return (
    <div className="container mx-auto mt-[100px]">
      <div className=" flex justify-between">
        <div className=" w-full font-forum text-[61px] font-[400] text-[#454545]">
          Featured Projects
        </div>
        <div className="w-full my-auto grid justify-items-end ">
          <a className="btn bg-[#E94B26] w-[250px] rounded-3xl flex">
            <p className=" text-white text-[18px] font-medium ">
              See All Projects
            </p>
            <Image
              src={"/Landing/eva_diagonal-arrow-left-up-fill.svg"}
              alt="Arrow"
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
      <div className=" mt-[50px]">
        <Cardlanding />
        <Cardlanding />
      </div>
      <div className=" mt-[180px]">
        <Expertise />
      </div>
    </div>
  );
};

export default Project;
