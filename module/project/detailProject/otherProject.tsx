import React from "react";

const OtherProjectModule = () => {
  return (
    <div className="bg-[#F6F6F6] lg:-mx-20 md:-mx-16 -mx-6 ">
      <section className="lg:mt-10 md:mt-6 mt-4 lg:mx-20 md:mx-16 mx-6 lg:py-20 md:py-12 py-6 ">
        <div className="flex items-center relative">
          <h2 className="text-[#454545] lg:text-[40px] md:text-[24px] text-[20px] font-[400] font-sans lg:mb-5 md:mb-4 mb-3">
            Other Projects
          </h2>
          <img
            src="/all_project/wheel.svg"
            alt="wheel"
            className="lg:w-8 md:w-6 w-4 h-auto ml-2 relative -top-5"
          />
        </div>

        <div className="carousel gap-4">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjectModule;
