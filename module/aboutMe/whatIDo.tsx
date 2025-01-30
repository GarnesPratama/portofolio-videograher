
import React from "react";
import { useGetAboutMePage } from "./api";

const WhatIDo = () => {


  const { data } = useGetAboutMePage();
  return (
    <div className="container mx-auto my-[80px] px-4 sm:px-8 lg:px-16 xl:px-20 ">
      <div className=" flex items-center gap-3 md:gap-4 lg:gap-5">
        <img
          src="/project/wheel.svg"
          alt="wheel"
          className="lg:w-8 md:w-6 w-4 h-auto"
        />
        <img
          src="/aboutMe/line-about.svg"
          alt="wheel"
          className="lg:w-28 md:w-24 w-10  h-auto "
        />
        <h1 className=" text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] text-[#454545] font-[400] font-forum">
          What I Do
        </h1>
      </div>

      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5">
        {data?.what_i_dos?.map((items: any, index: any) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center h-full"
            >
              <img
                src={items?.image?.url}
                alt={items?.image?.name}
                className="rounded-xl w-full object-cover h-full"
              />
            </div>


          );
        })}
      </section>
    </div>
  );
};

export default WhatIDo;
