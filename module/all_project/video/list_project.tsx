import Image from "next/image";
import React from "react";

const ListProjectVideo = () => {
  const projectsVideoList = [
    {
      id: 1,
      imgSrc: "/all_project/dummy_all_page_video1.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
    {
      id: 2,
      imgSrc: "/all_project/dummy_all_page_video2.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
    {
      id: 3,
      imgSrc: "/all_project/dummy_all_page_video3.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
    {
      id: 4,
      imgSrc: "/all_project/dummy_all_page_video4.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
  ];
  return (
    <div className="bg-white">
      <section className=" container mx-auto py-9">
        <div className="navbar">
          <div className="navbar-start text-[#901F1C] font-body text-[24px] font-[500]">
            All Project
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 text-[#454545] font-body text-[20px] font-[300]">
              <li>
                <div className=" text-[#8888] font-body text-[18px] font-[300]">
                  Filter by:
                </div>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Video Editing</a>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Color Grading</a>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Cinematography</a>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Photography</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {projectsVideoList?.map((project) => (
        <section className="relative">
          <img
            src={project.imgSrc}
            alt="dummy-photo"
            className="object-cover w-full"
          />

          <div className="absolute bottom-20 left-0 right-0 px-20">
            <div className="mt-4 flex flex-wrap gap-3 mb-5">
              {project?.tags?.map((tag, index) => (
                <div
                  key={index}
                  className="button-gradient-allproject rounded-full py-2 px-6 text-white"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center w-full mb-5">
              <h2 className="text-[30px] text-[#F6F6F6] font-[600] mt-5">
                {project?.title}
              </h2>

              <button className="btn btn-outline rounded-3xl text-[20px] font-[500] border-white text-white hover:bg-[#FEF3EE] hover:border-[#B52419] hover:text-[#B52419] flex items-center">
                <p className="font-[500]">View Details</p>
                <Image
                  src={"/arrow_grey.svg"}
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>

            <p className="text-[#D1D1D1] font-body text-[19px] font-[400]">
              {project?.description}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ListProjectVideo;
