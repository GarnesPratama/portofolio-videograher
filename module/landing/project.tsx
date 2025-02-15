import Cardlanding from "@/components/molecules/card";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for scroll-triggered animations
import { useGetFeaturedProject } from "./api";

const Project = () => {
  return (
    <div className="container mx-auto mt-7 md:mt-10 lg:mt-[100px] px-4 md:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center">
        <motion.div
          className="w-full md:w-auto font-forum text-[30px] md:text-[48px] lg:text-[61px] font-[400] text-[#454545]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }} // Animate on scroll
        >
          Featured Projects
        </motion.div>
        <div className="w-full md:w-auto mt-3 md:mt-5 grid justify-items-end">
          <motion.a
            className="btn bg-[#E94B26] w-full sm:w-[250px] rounded-3xl flex items-center justify-between px-4 py-2"
            href="/all-project"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }} // Animate on scroll
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
          </motion.a>
        </div>
      </div>
      <div className="mt-[50px]">
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }} // Animate on scroll
        >
          <Cardlanding />
        </motion.div>


        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }} // Animate on scroll
        >
          <Cardlanding />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Project;
