import React, { useRef } from "react";
import { useGetOtherProject } from "../api";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OtherProjectModule = () => {
  const router = useRouter();
  const { documentId } = router.query;
  const { data } = useGetOtherProject(documentId as string);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F6F6F6] lg:-mx-20 md:-mx-16 -mx-6">
      <section className="lg:mt-10 md:mt-6 mt-4 lg:mx-20 md:mx-16 mx-6 lg:py-20 md:py-12 py-6">
        <div className="flex items-center relative">
          <h2 className="text-[#454545] lg:text-[40px] md:text-[24px] text-[20px] font-[400] font-sans lg:mb-5 md:mb-4 mb-3">
            Other Projects
          </h2>
          <img
            src="/project/wheel.svg"
            alt="wheel"
            className="lg:w-8 md:w-6 w-4 h-auto ml-2 relative -top-5"
          />
        </div>

        {/* Container untuk tombol */}
        <div className="relative">
          <div className="flex justify-end space-x-3 absolute -top-12 right-0">
            <button
              className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition duration-300"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition duration-300"
              onClick={scrollRight}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Carousel tetap sama, tidak diubah */}
          <div
            ref={carouselRef}
            className="carousel gap-4 flex justify-between overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {data?.map((project: any, index: any) => {
              return (
                <div className="carousel-item" key={index}>
                  <a href={`/all-project/${project?.documentId}`}>
                    <div
                      className="relative w-96"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <img
                        src={project?.cover?.url}
                        alt="project cover"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjectModule;
