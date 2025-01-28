import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useGetAllProject } from "./api";
interface ListProjectProps {
  selectedCategory:
  | "Video Editing"
  | "Color Grading"
  | "Cinematography"
  | "Photography";
}

const ListProjectVideo: React.FC<ListProjectProps> = ({ selectedCategory }) => {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);
  const { data } = useGetAllProject();

  const filteredData = data?.filter((project: any) =>
    project.categories.some(
      (category: any) => category.name === selectedCategory
    )
  );

  // const dummyContent = [
  //   {
  //     id: 1,
  //     imgSrc: "/project/dummy_all_page_video1.svg",
  //     title:
  //       "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
  //     description: "Resonate ANTV Jamming Session",
  //     tags: ["Video Editing", "Color Grading", "Cinematography"],
  //   },
  //   {
  //     id: 2,
  //     imgSrc: "/project/dummy_all_page_video2.svg",
  //     title:
  //       "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
  //     description: "Resonate ANTV Jamming Session",
  //     tags: ["Video Editing", "Color Grading", "Cinematography"],
  //   },
  //   {
  //     id: 3,
  //     imgSrc: "/project/dummy_all_page_video3.svg",
  //     title:
  //       "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
  //     description: "Resonate ANTV Jamming Session",
  //     tags: ["Video Editing", "Color Grading", "Cinematography"],
  //   },
  //   {
  //     id: 4,
  //     imgSrc: "/project/dummy_all_page_video4.svg",
  //     title:
  //       "Diaries Festival ANTV Rame: Gildcoustic Bikin Penonton Nangis Dipanggung",
  //     description: "Resonate ANTV Jamming Session",
  //     tags: ["Video Editing", "Color Grading", "Cinematography"],
  //   },
  // ];

  // Hook untuk menghitung scroll progress
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  // Scroll otomatis ke gambar ketika gambar masuk ke viewport
  const handleImageEnter = (index: number) => {
    if (!pageLoaded) return; // Jangan scroll otomatis sebelum halaman dimuat
    const imageElement = imageRefs.current[index];
    if (imageElement) {
      window.scrollTo({
        top: imageElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Set state untuk mendeteksi bahwa halaman sudah dimuat
    const timer = setTimeout(() => {
      setPageLoaded(true); // Halaman sudah dimuat, aktifkan scroll otomatis
    }, 1000); // Set timeout 1 detik (atau sesuai kebutuhan)

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer); // Membersihkan timeout saat unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {filteredData?.length === 0 ? (
        <div className="text-center text-gray-500 text-lg font-medium lg:py-10 md:py-5 py-3">
          Data not found
        </div>
      ) : (
        filteredData?.map((project: any, index: any) => (
          <section
            className="relative"
            key={project.id}
            ref={(el) => {
              if (el) imageRefs.current[index] = el;
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              onViewportEnter={() => handleImageEnter(index)}
            >
              <img
                src={project?.cover?.url}
                alt="dummy-photo"
                className="object-cover w-full h-screen"
              />
            </motion.div>

            {/* Project Text and Button */}
            <div className="absolute lg:bottom-20 md:bottom-5 bottom-0 left-0 right-0 lg:px-20 md:px-10 px-4">
              <div className="mt-4 flex flex-wrap gap-3 lg:mb-5 md:mb-3 mb-0 text-[10px]">
                {project?.categories?.map((tag: any, index: any) => (
                  <div
                    key={index}
                    className="button-gradient-allproject rounded-full py-2 px-6 lg:text-[17px] md:text-[12px] text-[10px] md:block hidden"
                  >
                    {tag?.name}
                  </div>
                ))}
              </div>

              <div className="lg:flex grid justify-between items-center w-full mb-5">
                <div className=" w-4/5">
                  <h2 className="lg:text-[30px] md:text-[20px] text-[12px] text-[#F6F6F6] font-[600] mt-5">
                    {project?.title}
                  </h2>
                  <p className="text-[#D1D1D1] font-body lg:text-[19px] md:text-[15px] text-[10px] font-[400]">
                    {project?.description}
                  </p>
                </div>

                <button
                  onClick={() =>
                    router.push(`/all-project/${project?.documentId}`)
                  }
                  className="outline px-3 py-1 w-max lg:mt-0 mt-3 rounded-3xl lg:text-[20px] md:text-[15px] text-[12px] font-[500] border-white text-white hover:bg-[#FEF3EE] hover:border-[#B52419] hover:text-[#B52419] flex items-center"
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
        ))
      )}
    </>
  );
};

export default ListProjectVideo;
