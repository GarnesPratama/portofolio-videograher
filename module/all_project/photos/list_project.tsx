import React from "react";

const ListProjectVideo = () => {
  const images = [
    {
      img1: "/all_project/dummy_all_page_photo1.svg",
      img2: "/all_project/dummy_all_page_photo2.svg",
    },
    {
      img1: "/all_project/dummy_all_page_photo3.svg",
      img2: "/all_project/dummy_all_page_photo4.svg",
    },
    {
      img1: "/all_project/dummy_all_page_photo5.svg",
      img2: "/all_project/dummy_all_page_photo6.svg",
    },
    {
      img1: "/all_project/dummy_all_page_photo7.svg",
      img2: "/all_project/dummy_all_page_photo8.svg",
    },
  ];
  return (
    <div className="bg-white">
      <section className=" container mx-auto py-9">
        <div className="navbar">
          <div className="navbar-start text-[#901F1C] font-body text-[24px] font-[500]">
            All Project
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 text-[#454545] font-body text-[20px] font-[300]">
              <li>
                <div className=" text-[#8888] font-body text-[18px] font-[300]">
                  Filter by:
                </div>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Video Editing</a>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Color Grading</a>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Cinematography</a>
              </li>
              <li className="hover:text-[#E94B26] hover:bg-transparent">
                <a>Photography</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        {images.map((image, index) => (
          <div key={index} className="flex w-full h-[400px] px-10 gap-7 py-3 justify-center">
            <div className={`flex-[${index % 2 === 0 ? 3 : 2}] bg-red-500`}>
              <img
                src={image.img1}
                alt="Gambar 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className={`flex-[${index % 2 === 0 ? 2 : 3}] bg-blue-500`}>
              <img
                src={image.img2}
                alt="Gambar 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListProjectVideo;
