import { useRouter } from "next/router";
import React from "react";

const ListProjectPhoto = () => {
  const router = useRouter();
  const dummyContent = [
    {
      img1: "/project/dummy_all_page_photo1.svg",
      img2: "/project/dummy_all_page_photo2.svg",
    },
    {
      img1: "/project/dummy_all_page_photo3.svg",
      img2: "/project/dummy_all_page_photo4.svg",
    },
    {
      img1: "/project/dummy_all_page_photo5.svg",
      img2: "/project/dummy_all_page_photo6.svg",
    },
    {
      img1: "/project/dummy_all_page_photo7.svg",
      img2: "/project/dummy_all_page_photo8.svg",
    },
  ];
  return (
    <section className=" grid justify-center">
      {dummyContent.map((image, index) => (
        <div
          key={index}
          className="md:flex grid w-full lg:px-10 md:px-7 px-5 md:gap-7 gap-4 md:py-3 py-2"
        >
          <div className={`md:flex-[${index % 2 === 0 ? 3 : 2}] grid`}>
            <a href="/all-project/1">
              <img
                src={image.img1}
                alt="Gambar 1"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          <div className={`md:flex-[${index % 2 === 0 ? 2 : 3}] grid`}>
            <a href="/all-project/1">
              <img
                src={image.img2}
                alt="Gambar 2"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListProjectPhoto;
