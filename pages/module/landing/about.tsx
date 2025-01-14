import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between mt-12 md:mt-[50px] space-y-8 md:space-y-0">
      <div className="w-full md:w-1/2 h-full text-center md:text-left">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B26] to-[#901F1C] text-[16px] font-[600]">
          / CRAFTING STUNNING VISUALS
        </p>
        <h1 className="font-[400] font-forum text-[36px] md:text-[49px] text-[#454545]">
          About Me
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <div className="description font-[400] text-[16px] md:text-[20px] text-[#454545] text-center md:text-left">
          Video Editor dengan <span className="text-[#E94B26]">pengalaman 3 tahun</span> dalam menciptakan konten visual
          yang menarik. Mahir dalam Editing Video, Adobe Premiere Pro, Adobe
          Photoshop, After Effects. Mampu bekerja sama dalam tim dan berfokus
          pada pengembangan keterampilan dalam Color Grading dan Motion
          Graphics.
        </div>
        <div className="cta my-8 md:my-[50px] flex justify-center md:justify-start">
          <button className="btn btn-outline rounded-3xl w-[199px] border-[#454545] text-[#454545] flex items-center justify-center space-x-2">
            <p className="text-[16px] md:text-[20px] font-[500]">Read More</p>
            <Image
              src={"/arrow_grey.svg"}
              alt="Arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
