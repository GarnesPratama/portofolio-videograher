import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useGetAboutMe } from "./api";

const About = () => {
  const { data } = useGetAboutMe();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between mt-8 md:mt-[50px] space-y-8 md:space-y-0">
      <div className="w-full md:w-1/2 h-full text-center md:text-left">
        <motion.p
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B26] to-[#901F1C] text-[16px] font-[600]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger once the element is 20% in view
        >
          / CRAFTING STUNNING VISUALS
        </motion.p>
        <motion.h1
          className="font-[400] font-forum text-[30px] md:text-[49px] text-[#454545]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger once the element is 20% in view
        >
          About Me
        </motion.h1>
      </div>
      <div className="w-full md:w-1/2">
        <motion.div
          className="description font-[400] text-[16px] md:text-[20px] text-[#454545] text-center md:text-left md:mt-0 -mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger once the element is 20% in view
        >
          {data?.nice_to_meet_you}
        </motion.div>
        <motion.div
          className="cta my-5 md:my-9 lg:my-[50px] flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger once the element is 20% in view
        >
          <a
            className="btn btn-outline rounded-3xl md:w-96 lg:w-[199px] border-[#454545] text-[#454545] flex items-center justify-center lg:space-x-2 md:x-3"
            href="/about-me"
          >
            <p className="text-[16px] md:text-[20px] font-[500]">Read More</p>
            <Image src={"/arrow_grey.svg"} alt="Arrow" width={20} height={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
