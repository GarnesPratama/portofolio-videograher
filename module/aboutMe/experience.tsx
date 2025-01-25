import Image from "next/image";
import React from "react";
import { useGetAboutMePage } from "./api";

const Experience = () => {
  const { data } = useGetAboutMePage();
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
          <h1 className="font-forum text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] text-[#454545] font-[400]">
            My Work Experience
          </h1>
        </div>

        {data?.work_experiences?.map((experience: any, key: any) => {
          return (
            <div key={key}>
              <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[32px] justify-between mt-[24px]">
                <div className="w-full">
                  <h1 className="text-[24px] md:text-[28px] lg:text-[32px] text-[#901F1C] font-[700]">
                    {experience?.job_title}
                  </h1>
                  <h1 className="text-[20px] md:text-[24px] lg:text-[28px] text-[#5D5D5D] font-[600]">
                    {experience?.company}
                  </h1>
                </div>
                <div className="w-full -mt-4 md:-mt-8 lg:mt-0 lg:text-end">
                  <h1 className="text-[18px] md:text-[22px] lg:text-[28px] text-[#5D5D5D] font-[500]">
                    {experience?.date_from && (
                      <>
                        {new Date(experience.date_from).getFullYear()} -{" "}
                        {experience?.is_current_working
                          ? "Present"
                          : new Date(experience.date_to).getFullYear()}
                      </>
                    )}
                  </h1>
                </div>
              </div>
              <div className="mb-10">
                <ul className="list-disc text-[#888888] text-[18px] md:text-[20px] lg:text-[24px] font-[400] border-b-2 pb-[36px] max-w-[calc(100%-8rem)] mx-auto mt-3">
                  {experience?.description
                    ?.split("\n")
                    .map((desc: string, index: number) => (
                      <li key={index}>{desc}</li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
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
        {data?.educations?.map((education: any, key: any) => {
          return (
            <div id={key}>
              <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[32px] justify-between mt-[24px]">
                <div className="w-full">
                  <h1 className="text-[24px] md:text-[28px] lg:text-[32px] text-[#901F1C] font-[700]">
                    {education?.major}
                  </h1>
                  <h1 className="text-[20px] md:text-[24px] lg:text-[28px] text-[#5D5D5D] font-[600]">
                    {education?.university}
                  </h1>
                </div>
                <div className="w-full -mt-4 md:-mt-8 lg:mt-0 lg:text-end">
                  <h1 className="text-[18px] md:text-[22px] lg:text-[28px] text-[#5D5D5D] font-[500]">
                    {education?.date_from && education?.date_to && (
                      <>
                        {new Date(education.date_from).getFullYear()} -
                        {new Date(education.date_to).getFullYear()}
                      </>
                    )}
                  </h1>
                </div>
              </div>
              <div className="mb-10">
                <ul className="list-disc text-[#888888] text-[18px] md:text-[20px] lg:text-[24px] font-[400] border-b-2 pb-[36px] max-w-[calc(100%-8rem)] mx-auto mt-3">
                  {education?.description
                    ?.split("\n")
                    .map((desc: string, index: number) => (
                      <li key={index}>{desc}</li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
