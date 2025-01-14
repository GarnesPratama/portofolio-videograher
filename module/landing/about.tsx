import React from "react";

const About = () => {
  return (
    <div className=" container mx-auto flex justify-between mt-[50px]">
      <div className=" w-full">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94B26] to-[#901F1C] text-[16px] font-[600]">
          / CRAFTING STUNNING VISUALS
        </p>
        <h1 className=" font-[400] font-forum text-[49px] text-[#454545]">
          About Me
        </h1>
      </div>
      <div className=" w-full">
        <div className="description font-[400] text-[20px] text-black">
          Video Editor dengan pengalaman 3 tahun dalam menciptakan konten visual
          yang menarik. Mahir dalam Editing Video, Adobe Premiere Pro, Adobe
          Photoshop, After Effects. Mampu bekerja sama dalam tim dan berfokus
          pada pengembangan keterampilan dalam Color Grading dan Motion
          Graphics.
        </div>
        <div className="cta my-[50px] flex">
          <button className="btn btn-outline rounded-3xl w-[199px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
