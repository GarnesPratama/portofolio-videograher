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
            className="card card-compact w-full mt-[20px] mb-[100px]"
            key={key}
          >
            <figure>
              <Image
                src={"/Landing/dummy_card.svg"}
                alt="Project"
                className="w-full rounded-3xl"
                width={50}
                height={50}
              />
            </figure>
            <div className="flex justify-between">
              <div className="w-full">
                <div className="classifier mt-[56px]">
                  <button
                    className="relative text-[#901F1C] py-2 px-6 rounded-3xl w-[148px] text-[16px] font-[400]"
                    style={{
                      background:
                        "linear-gradient(90deg, #FEF3EE 0%, #FCE5D8 100%)",
                      border: "1px solid transparent",
                    }}
                  >
                    Video Editing
                  </button>
                </div>

                <div className="mt-[24px]">
                  <h2 className="text-[#454545] font-[600px] text-[31px]">
                    {project?.title}
                  </h2>
                  <p className="text-[#6D6D6D] font-[400px] text-[20px] pt-5">
                    {project?.client_name}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="justify-end grid place-content-end my-auto mt-10">
                  <div className="cta my-[80px] flex">
                    <button
                      className="btn btn-outline rounded-3xl w-[199px] text-[20px] font-[500] border-[#454545] text-[#454545]"
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
