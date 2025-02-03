import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useGetAboutMePage } from "./api";

const Description = () => {
  const { data, isLoading } = useGetAboutMePage();

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between container mx-auto my-[80px] px-4 sm:px-8 lg:px-16 xl:px-26">
      <div className="section-1 w-full text-[#5D5D5D]">
        <div className="desc">
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-[50px] sm:h-[60px] md:h-[70px] bg-gray-300 rounded-md mb-4"></div>
              <div className="h-[20px] sm:h-[24px] lg:h-[28px] bg-gray-200 rounded-md mb-5"></div>
            </div>
          ) : (
            <>
              <motion.h1
                className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-forum font-[400] relative right-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Nice to Meet You!
              </motion.h1>

              <p className="mt-[10px] text-justify font-[400] text-[16px] sm:text-[18px] lg:text-[20px]">
                {data?.nice_to_meet_you}
              </p>
            </>
          )}
        </div>
        <div className="btn-cta lg:mt-10 mt-5">
          {isLoading ? (
            <div className="h-[48px] bg-gray-300 rounded-3xl w-full"></div>
          ) : (
            <button className="">
              <a
                className="btn border-none bg-[#E94B26] w-full rounded-3xl flex items-center justify-center px-4 text-white text-[16px] sm:text-[18px] lg:text-[20px] font-[500]"
                href={data?.download_cv_link}
                target="_blank"
              >
                Download Resume
              </a>
            </button>
          )}
        </div>
      </div>
      <div className="section-2 w-full mb-10 lg:mb-0 flex justify-center lg:justify-end">
        {isLoading ? (
          <div className="h-[250px] sm:h-[300px] lg:h-[350px] bg-gray-300 rounded-xl w-3/4 mx-auto"></div>
        ) : (
          <img
            src={data?.profile_picture?.url}
            className="md:w-2/3 w-3/4 rounded-xl object-cover"
            alt={data?.profile_picture?.formats?.thumbnail?.name}
          />
        )}
      </div>
    </div>
  );
};

export default Description;
