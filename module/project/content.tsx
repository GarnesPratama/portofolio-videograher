import React, { useState } from "react";
import ListProjectPhoto from "./project-photos";
import ListProjectVideo from "./project-video";

const ContentProject = () => {
  const [selectedCategory, setSelectedCategory] = useState("Video Editing");

  return (
    <div className="bg-white">
      <section className=" container mx-auto py-9">
        <div className="navbar flex flex-wrap items-center justify-between px-4">
          {/* Navbar Start */}
          <div className="md:navbar-start text-[#901F1C] font-body text-[24px] font-[500] ">
            All Project
          </div>

          {/* Navbar End */}
          <div className="navbar-end w-auto">
            <ul className="menu flex flex-wrap menu-horizontal text-[#454545] font-body text-[16px] md:text-[20px] md:gap-4 gap-2">
              {/* Filter Text */}
              <div className="w-full  text-left text-[#8888] font-body text-[16px] font-[300] ">
                Filter by:
              </div>

              {/* Filter Buttons */}
              <button
                className={`${
                  selectedCategory === "Video Editing"
                    ? "hover:text-[#E94B26] hover:bg-transparent text-[#E94B26]"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Video Editing")}
              >
                Video Editing
              </button>
              <button
                className={`${
                  selectedCategory === "Color Grading"
                    ? "hover:text-[#E94B26] hover:bg-transparent text-[#E94B26]"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Color Grading")}
              >
                Color Grading
              </button>
              <button
                className={`${
                  selectedCategory === "Cinematography"
                    ? "hover:text-[#E94B26] hover:bg-transparent text-[#E94B26]"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Cinematography")}
              >
                Cinematography
              </button>
              <button
                className={`${
                  selectedCategory === "Photography"
                    ? "hover:text-[#E94B26] hover:bg-transparent text-[#E94B26]"
                    : ""
                }`}
                onClick={() => setSelectedCategory("Photography")}
              >
                Photography
              </button>
            </ul>
          </div>
        </div>
      </section>
      {selectedCategory === "Video Editing" ? (
        <ListProjectVideo />
      ) : (
        <ListProjectPhoto />
      )}
    </div>
  );
};

export default ContentProject;
