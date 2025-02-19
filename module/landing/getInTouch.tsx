import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animations
import React from "react";

const GetInTouch = () => {
  return (
    <div className="bg-[url('/Landing/bg_cta.png')] h-full w-full bg-cover">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap py-16 lg:py-[160px] px-4 sm:px-6 lg:px-8 gap-10">
        {/* Section Text */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }} // Animate when in view
          >
            <Image
              src={"/Landing/work_with_me.svg"}
              alt="photo-work-with-me"
              width={180}
              height={30}
            />
          </motion.div>
          <div className="mt-6 text-white">
            <motion.h1
              className="text-[30px] sm:text-[48px] lg:text-[61px] font-[400] font-forum leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }} // Animate when in view
            >
              Ready to <span className="text-[#E94B26]">bring your vision</span>{" "}
              to life?
            </motion.h1>
            <motion.p
              className="mt-4 text-[18px] sm:text-[22px] lg:text-[25px] font-[400]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }} // Animate when in view
            >
              I'd love to hear about your project and how I can help.
            </motion.p>
          </div>
          <motion.div
            className="flex items-start mt-10 lg:mt-[180px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }} // Animate when in view
          >
            <a
              href="/contact-us"
              className="bg-[#E94B26] hover:bg-[#c83d21] transition lg:w-[150px] w-full rounded-3xl py-3 text-center"
            >
              <p className="text-white text-[18px] font-medium">Get In Touch</p>
            </a>
          </motion.div>
        </div>

        {/* Section Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }} // Animate when in view
          >
            <Image
              src={"/Landing/photo_work_with_me.svg"}
              alt="photo-work-with-me"
              width={700}
              height={700}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
