import React from "react";
import { useGetAboutMePage } from "./api";

const Skill = () => {
  const { data } = useGetAboutMePage();
  const mySkill = [
    { data: "Cinematography" },
    { data: "Color Grading" },
    { data: "Motion Graphics" },
    { data: "Video Editing" },
    { data: "Art Direction" },
    { data: "Photography" },
    { data: "Sound Recording" },
    { data: "Storytelling" },
  ];

  const softwareSkill = [
    { img: "/aboutMe/logos_adobe-premiere.svg", data: "Adobe Premiere Pro" },
    {
      img: "/aboutMe/skill-icons_aftereffects.svg",
      data: "Adobe After Effects",
    },
    { img: "/aboutMe/devicon_photoshop.svg", data: "Adobe Photoshop" },
  ];

  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/aboutMe/bg-my-skill.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto my-[80px] px-4 sm:px-8 lg:px-16 xl:px-20 py-32">
        <div className="md:flex grid text-black gap-5 w-full">
          <section
            className="md:w-6/12 px-6 md:px-8 py-10 rounded-3xl border-[#F8C7B0] border-solid border-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(231, 231, 231, 0.5) 0%, rgba(109, 109, 109, 0.5) 100%)",
            }}
          >
            <div className="flex gap-5">
              <img src={"/aboutMe/flash-my-skill.svg"} className="w-7" />
              <h1 className="text-[#F6F6F6] font-forum text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px]font-[400]">
                My Skills
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-5">
              {data?.my_skills?.map((items: any) => (
                <p className="px-6 py-2 bg-white border-[#F8C7B0] border-solid border-2 rounded-full text-[#0606065d] w-fit font-sans text-[14px] md:text-[16px] lg:text-[18px] font-[600]">
                  {items?.name}
                </p>
              ))}
            </div>
          </section>

          <section
            className="md:w-6/12 px-6 md:px-8 py-10 rounded-3xl border-[#F8C7B0] border-solid border-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(231, 231, 231, 0.5) 0%, rgba(109, 109, 109, 0.5) 100%)",
            }}
          >
            <div className="flex gap-5">
              <img src={"/aboutMe/software-skill.svg"} className="w-7" />
              <h1 className="text-[#F6F6F6] font-forum text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[400]">
                Software Skills
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-5">
              {softwareSkill?.map((items) => {
                return (
                  <div className="flex justify-center items-center w-fit">
                    <div
                      className="flex justify-center items-center gap-3 py-3 px-6 border-[#F8C7B0] border-solid border-2 rounded-full text-[#0606065d] w-fit font-sans text-[18px] font-[600]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(246, 246, 246, 0.5) 100%)",
                      }}
                    >
                      <img src={items?.img} alt="" className="w-10" />
                      <p className="text-[18px] md:text-[20px] lg:text-[24px] ">
                        {items?.data}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skill;
