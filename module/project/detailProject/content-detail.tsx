import React from "react";
import { useRouter } from "next/router";
import OtherProjectModule from "./otherProject";
import { useGetProjectByDocumentId } from "../api";

const ContentDetailModule = () => {
  const router = useRouter();
  const { documentId } = router.query;
  const { data } = useGetProjectByDocumentId(documentId as string);
  console.log("casd", data)
  const convertToEmbedUrl = (url: any) => {
    return url?.replace("watch?v=", "embed/");
  };

  const embedUrl = convertToEmbedUrl(
    "https://www.youtube.com/watch?v=u6gVd7MmM60"
  );
  console.log(embedUrl);

  return (
    <div className=" lg:mx-20 md:mx-16 mx-6 lg:my-10 md:my-6 my-2">
      {data?.map((detail: any, key: any) => {
        return (
          <div key={key}>
            <section className="breadcrumbs lg:text-[22px] md:text-[20px] text-[18px] font-[400]">
              <ul>
                <li>
                  <a className=" text-[#888888] " onClick={() => router.back()}>
                    Project
                  </a>
                </li>
                <li>
                  <a className=" text-[#901F1C]">{detail?.title}</a>
                </li>
              </ul>
            </section>
            <section className=" lg:-mx-20 md:-mx-16 -mx-6 lg:mt-10 md:mt-8 mt-6">
              <iframe
                // width="420"
                // height="315"
                // src="https://www.youtube.com/embed/0z0iXiJxCqY"
                src={convertToEmbedUrl(detail?.cover_video_content?.url)}
                // src="https://www.youtube-nocookie.com/embed/u6gVd7MmM60?autohide=1&rel=0&modestbranding=1"
                // src="https://www.youtube.com/embed/u6gVd7MmM60"
                className="w-full md:h-screen h-96"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </section>
            <section className=" lg:mt-16 md:mt-12 mt-8">
              <div className="">
                <div className="mt-4 flex flex-wrap lg:gap-3 md:gap-2 gap-1 lg:mb-10 md:mb-5 mb-2 text-[10px]">
                  {detail?.categories?.tags?.map((tag: any, key: any) => (
                    <div
                      key={key}
                      className="button-gradient-allproject rounded-full py-2 lg:px-6 md:px-4 px-2 lg:text-[17px] md:text-[14px] text-[12px]"
                    >
                      {tag?.name}
                    </div>
                  ))}
                </div>

                <div className="flex md:flex-row flex-col text-black lg:gap-20 md:gap-16 gap-0 lg:mb-10 md:mb-8 mb-6">
                  <div>
                    <p className=" text-[#6D6D6D] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
                      Year
                    </p>
                    <h3 className=" text-[#454545] lg:text-[24px] md:text-[20px] text-[17px] font-[700] mt-1">
                      {detail?.year}
                    </h3>
                  </div>
                  <div>
                    <p className=" text-[#6D6D6D] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
                      Client
                    </p>
                    <h3 className=" text-[#454545] lg:text-[24px] md:text-[20px] text-[17px] font-[700] mt-1">
                      {detail?.client_name}
                    </h3>
                  </div>
                  <div>
                    <p className=" text-[#6D6D6D] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
                      Location
                    </p>
                    <h3 className=" text-[#454545] lg:text-[24px] md:text-[20px] text-[17px] font-[700] mt-1">
                      {detail?.location}
                    </h3>
                  </div>
                </div>

                <h1 className=" text-[#181818] lg:text-[28px] md:text-[24px] text-[20px] font-[700] font-sans">
                  {detail?.title}
                </h1>
                <p className=" text-[#454545] lg:mt-5 md:mt-4 mt-3 lg:text-[20px] md:text-[18px] text-[16px]  font-[400] text-justify">
                  {detail?.description}
                </p>
                {/* <p className=" font-[700] text-[#454545] lg:text-[25px] md:text-[22px] text-[18px] lg:mt-10 md:mt-6 mt-4">
                  Cinematography:
                </p>
                <ul className="text-[#454545] lg:mt-5 md:mt-4 mt-3 lg:text-[20px] md:text-[18px] text-[16px] font-[400] text-justify">
                  <li>
                    Lens Choice: A combination of wide-angle lenses (e.g., 16mm,
                    24mm) were used to capture the expansive landscapes,
                    emphasizing the protagonist's sense of smallness within the
                    vast environment.
                  </li>{" "}
                  <li>
                    Conversely, telephoto lenses (e.g., 50mm, 85mm) were
                    employed to isolate the protagonist, highlighting their
                    solitude and inner turmoil.{" "}
                  </li>
                  <li>
                    Camera Movement: Smooth tracking shots were utilized to
                    follow the protagonist's journey, while handheld shots added
                    a sense of immediacy and realism.
                  </li>{" "}
                  <li>
                    {" "}
                    Depth of Field: Shallow depth of field was employed to draw
                    attention to key elements within the frame and create a
                    sense of isolation and introspection.
                  </li>
                </ul> */}
              </div>
            </section>
          </div>
        );
      })}

      <OtherProjectModule />
    </div>
  );
};

export default ContentDetailModule;
