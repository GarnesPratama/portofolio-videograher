import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  const text1 = "Your Story, ";
  const text2 = "Brought to Life";
  const text3 = " Through Stunning Visuals.";

  return (
    <div
      className="-mt-[100px] text-white bg-[url('/Landing/jumbotron.svg')] bg-cover bg-center w-full h-screen "
      // style={{ height: "calc(100vh + 20px)" }}
    >
      <h1 className="text-center mx-auto pt-[250px] sm:pt-[300px] font-forum leading-tight text-[30px] sm:text-[48px] md:text-[61px] lg:text-[70px] px-4 mb-[500px] sm:mb-[600px]">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 4, // Increased duration for slower typing effect
            ease: "easeInOut",
            delay: 0.5, // Delay before animation starts
          }}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {text1.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1, // Increased delay for each character
                duration: 0.1, // Increased duration for slower fade-in
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="text-[#E94B26]" // Color applied here for "Brought to Life"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: text1.length * 0.1 + 0.5, // Increased delay for "Brought to Life"
              duration: 0.1,
            }}
          >
            {text2.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: (text1.length + index) * 0.1, // Increased delay for each character in "Brought to Life"
                  duration: 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: (text1.length + text2.length) * 0.1 + 0.5, // Increased delay for "Through Stunning Visuals."
            duration: 0.1,
          }}
        >
          {text3.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: (text1.length + text2.length + index) * 0.1, // Increased delay for each character in "Through Stunning Visuals."
                duration: 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </h1>
      <div className="flex justify-center">
        <img
          src={"/Landing/arrow_down.svg"}
          alt="arrow-down"
          className="cursor-pointer animate-bounce absolute lg:bottom-14 bottom-20 lg:w-9 md:w-8 w-7"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
