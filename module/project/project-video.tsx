import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ListProjectVideo = () => {
  const router = useRouter();
  const dummyContent = [
    {
      id: 1,
      imgSrc: "/project/dummy_all_page_video1.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
    {
      id: 2,
      imgSrc: "/project/dummy_all_page_video2.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
    {
      id: 3,
      imgSrc: "/project/dummy_all_page_video3.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
    {
      id: 4,
      imgSrc: "/project/dummy_all_page_video4.svg",
      title:
        "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
      description: "Resonate ANTV Jamming Session",
      tags: ["Video Editing", "Color Grading", "Cinematography"],
    },
  ];
  return (
    <>
      {dummyContent?.map((project) => (
        <section className="relative">
          <img
            src={project.imgSrc}
            alt="dummy-photo"
            className="object-cover w-full"
          />

          <div className="absolute lg:bottom-20 md:bottom-5 bottom-0 left-0 right-0 lg:px-20 md:px-10 px-4">
            <div className="mt-4 flex flex-wrap gap-3 lg:mb-5 md:mb-3 mb-0 text-[10px]">
              {project?.tags?.map((tag, index) => (
                <div
                  key={index}
                  className="button-gradient-allproject rounded-full py-2 px-6 lg:text-[17px] md:text-[12px] text-[10px] md:block hidden"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="lg:flex grid justify-between items-center w-full mb-5">
              <div className="">
                <h2 className="lg:text-[30px] md:text-[20px] text-[12px]  text-[#F6F6F6] font-[600] mt-5">
                  {project?.title}
                </h2>
                <p className="text-[#D1D1D1] font-body lg:text-[19px] md:text-[15px] text-[10px] font-[400]">
                  {project?.description}
                </p>
              </div>

              <button
                onClick={() => router.push("/all-project/1")}
                className=" outline px-3 py-1 w-max lg:mt-0 mt-3 rounded-3xl lg:text-[20px] md:text-[15px] text-[12px] font-[500] border-white text-white hover:bg-[#FEF3EE] hover:border-[#B52419] hover:text-[#B52419] flex items-center"
              >
                <p className="font-[500]">View Details</p>
                <Image
                  src={"/arrow_grey.svg"}
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ListProjectVideo;
