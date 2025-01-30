import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useGetAboutMePage } from "./api";

const Description = () => {
  const { data } = useGetAboutMePage();

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between container mx-auto my-[80px] px-4 sm:px-8 lg:px-16 xl:px-26">
      <div className="section-1 w-full text-[#5D5D5D]">
        <div className="desc">
          <motion.h1
            className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-forum font-[400] -mx-6"
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
        </div>
        <div className="btn-cta lg:mt-10 mt-5">
          <button className="">
            <a
              className="btn border-none bg-[#E94B26] w-full rounded-3xl flex items-center justify-center px-4 text-white text-[16px] sm:text-[18px] lg:text-[20px] font-[500]"
              href={data?.download_cv_link}
              target="_blank"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="section-2 w-full mb-10 lg:mb-0 flex justify-center lg:justify-end">
        <img
          // src={"/aboutMe/images.svg"}
          src={data?.profile_picture?.url}
          className="w-1/2 rounded-xl"
          alt={data?.profile_picture?.formats?.thumbnail?.name}
        // width={300}
        // height={300}
        />
      </div>
    </div>
  );
};

export default Description;
