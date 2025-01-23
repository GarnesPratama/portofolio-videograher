import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="container mx-auto my-[80px] px-4 sm:px-8 lg:px-16 xl:px-20">
      <div className="work-experience -mt-10">
        <div className="flex gap-[16px] sm:gap-[32px] items-center">
          <Image
            src={"/aboutMe/work_experience.svg"}
            alt="work-experience"
            width={64}
            height={64}
          />
          <h1 className="font-forum text-[32px] sm:text-[36px] md:text-[44] lg:text-[50px] text-[#454545] font-[400]">
            My Work Experience
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[32px] justify-between mt-[24px]">
          <div className="w-full">
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] text-[#901F1C] font-[700]">
              Content Production
            </h1>
            <h1 className="text-[20px] md:text-[24px] lg:text-[28px] text-[#5D5D5D] font-[600]">
              ANTV
            </h1>
          </div>
          <div className="w-full -mt-4 md:-mt-8 lg:mt-0 lg:text-end">
            <h1 className="text-[18px] md:text-[28px] lg:text-[32px] text-[#5D5D5D] font-[500]">
              Jan 2023 - Present
            </h1>
          </div>
        </div>
        <div className="mb-10">
          <ul className="list-disc text-[#888888] text-[18px] md:text-[20px] lg:text-[24px] font-[400] border-b-2 pb-[36px] max-w-[calc(100%-8rem)] mx-auto mt-3">
            <li>Job Description 1</li>
            <li>Job Description 2</li>
          </ul>
        </div>
      </div>

      <div className="education mt-10">
        <div className="flex gap-[16px] sm:gap-[32px] items-center">
          <Image
            src={"/aboutMe/education.svg"}
            alt="work-experience"
            width={64}
            height={64}
          />
          <h1 className="font-forum text-[32px] sm:text-[36px] md:text-[44] lg:text-[50px] text-[#454545] font-[400]">
            Education
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[32px] justify-between mt-[24px]">
          <div className="w-full">
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] text-[#901F1C] font-[700]">
              Ilmu Komunikasi (Broadcast)
            </h1>
            <h1 className="text-[20px] md:text-[24px] lg:text-[28px] text-[#5D5D5D] font-[600]">
              Telkom University
            </h1>
          </div>
          <div className="w-full -mt-4 md:-mt-8 lg:mt-0 lg:text-end">
            <h1 className="text-[18px] md:text-[28px] lg:text-[32px] text-[#5D5D5D] font-[500]">
              2016 - 2020
            </h1>
          </div>
        </div>
        <div className="mb-10">
          <ul className="list-disc text-[#888888] text-[18px] md:text-[20px] lg:text-[24px] font-[400] border-b-2 pb-[36px] max-w-[calc(100%-8rem)] mx-auto mt-3">
            <li>Job Description 1</li>
            <li>Job Description 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
