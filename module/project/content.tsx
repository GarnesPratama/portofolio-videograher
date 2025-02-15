import React, { useState } from "react";
import ListProjectVideo from "./project-video";
import ListProjectPhoto from "./project-photos";
import { useGetAllProject } from "./api"; // Ambil data proyek

const ContentProject = () => {
  const { data } = useGetAllProject();
  const [selectedCategory, setSelectedCategory] = useState("Video Editing");

  // Ambil kategori unik yang memiliki data
  const availableCategories = new Set();
  data?.forEach((project: any) =>
    project.categories.forEach((category: any) => availableCategories.add(category.name))
  );

  return (
    <div className="bg-white">
      <section className="container mx-auto py-9">
        <div className="navbar flex flex-wrap items-center justify-between px-4">
          {/* Navbar */}
          <div className="md:navbar-start text-[#901F1C] font-body text-[24px] font-[500]">
            All Project
          </div>
          <div className="navbar-end w-auto">
            <ul className="menu flex flex-wrap menu-horizontal text-[#454545] font-body text-[16px] md:text-[20px] md:gap-4 gap-2">
              {/* Tampilkan hanya button kategori yang memiliki data */}
              {availableCategories.has("Video Editing") && (
                <button
                  className={`${selectedCategory === "Video Editing" ? "text-[#E94B26]" : ""}`}
                  onClick={() => setSelectedCategory("Video Editing")}
                >
                  Video Editing
                </button>
              )}
              {availableCategories.has("Color Grading") && (
                <button
                  className={`${selectedCategory === "Color Grading" ? "text-[#E94B26]" : ""}`}
                  onClick={() => setSelectedCategory("Color Grading")}
                >
                  Color Grading
                </button>
              )}
              {availableCategories.has("Cinematography") && (
                <button
                  className={`${selectedCategory === "Cinematography" ? "text-[#E94B26]" : ""}`}
                  onClick={() => setSelectedCategory("Cinematography")}
                >
                  Cinematography
                </button>
              )}
              {availableCategories.has("Photography") && (
                <button
                  className={`${selectedCategory === "Photography" ? "text-[#E94B26]" : ""}`}
                  onClick={() => setSelectedCategory("Photography")}
                >
                  Photography
                </button>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Show ListProjectVideo only for Video Editing category */}
      {selectedCategory === "Video Editing" ? (
        <ListProjectVideo selectedCategory={selectedCategory} />
      ) : (
        <ListProjectPhoto
          selectedCategory={
            selectedCategory as "Color Grading" | "Cinematography" | "Photography"
          }
        />
      )}
    </div>
  );
};

export default ContentProject;
