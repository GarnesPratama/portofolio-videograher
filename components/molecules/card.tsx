import { useGetFeaturedProject } from "@/module/landing/api";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";

const Cardlanding = () => {
  const { data } = useGetFeaturedProject();
  const [latestProjects, setLatestProjects] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      const sortedProjects = data
        .sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 3);
      setLatestProjects(sortedProjects);
    }
  }, [data]);

  return (
    <>
      {latestProjects?.map((project: any, key: any) => {
        return (
          <div
            className="card card-compact w-full -mt-5 md:mt-[20px] lg:mb-[100px] mb-16"
            key={key}
          >
            <figure>
              <img
                src={project?.cover?.url}
                alt={project?.cover?.name}
                className="w-full rounded-3xl"
              />
            </figure>
            <div className="md:flex grid md:justify-between">
              <div className="w-full">
                <div className="flex flex-wrap gap-2">
                  {project?.categories?.map((category: any, key: any) => {
                    return (
                      <div
                        className="classifier mt-5 md:mt-10 lg:mt-[56px]"
                        key={key}
                      >
                        <button
                          className="relative text-[#901F1C] md:py-2 py-1 md:px-6 px-4 rounded-3xl lg:w-[148px] text-[13px] md:text-[16px] font-[400]"
                          style={{
                            background:
                              "linear-gradient(90deg, #FEF3EE 0%, #FCE5D8 100%)",
                            border: "1px solid transparent",
                          }}
                        >
                          {category?.name}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="lg:mt-[24px] mt-[12px]">
                  <h2 className="text-[#454545] font-[600px] text-[20px] md:text-[25px] lg:text-[31px]">
                    {project?.title}
                  </h2>
                  <p className="text-[#6D6D6D] font-[400px] lg:text-[20px] md:text-[23px] text-[16px] lg:pt-5 mt-0">
                    {project?.client_name}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="md:justify-end justify-start grid place-content-end my-auto md:mt-10 mt-3">
                  <div className="cta lg:my-[80px] flex">
                    <button
                      className="btn btn-outline rounded-3xl lg:w-[199px] w-max lg:text-[20px] text-[16px] font-[500] border-[#454545] text-[#454545]"
                      onClick={() =>
                        Router.push(`/all-project/${project?.documentId}`)
                      }
                    >
                      <p className="font-[500]">View Details</p>
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cardlanding;
