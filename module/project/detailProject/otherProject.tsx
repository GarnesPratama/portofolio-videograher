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
            src="/project/wheel.svg"
            alt="wheel"
            className="lg:w-8 md:w-6 w-4 h-auto ml-2 relative -top-5"
          />
        </div>

        <div className="carousel gap-4">
          <div className="carousel-item">
            <img
              src="/project/detailProject/dummy_detail_1.svg"
              alt="other-project"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/project/detailProject/dummy_detail_2.svg"
              alt="other-project"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/project/detailProject/dummy_detail_3.svg"
              alt="other-project"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/project/detailProject/dummy_detail_4.svg"
              alt="other-project"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjectModule;
