import Image from 'next/image';
import React from 'react';

const GetInTouch = () => {
    return (
        <div className="bg-[url('/Landing/bg_cta.png')] h-full w-full bg-cover">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap py-16 lg:py-[160px] px-4 sm:px-6 lg:px-8 gap-10">
                {/* Section Text */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <Image
                        src={"/Landing/work_with_me.svg"}
                        alt="photo-work-with-me"
                        width={180}
                        height={30}
                    />
                    <div className="mt-6">
                        <h1 className="text-[36px] sm:text-[48px] lg:text-[61px] font-[400] font-forum leading-tight">
                            Ready to <span className="text-[#E94B26]">bring your vision</span> to life?
                        </h1>
                        <p className="mt-4 text-[18px] sm:text-[22px] lg:text-[25px] font-[400">
                            I'd love to hear about your project and how I can help.
                        </p>
                    </div>
                    <div className="flex items-start mt-10 lg:mt-[180px]">
                        <a className="bg-[#E94B26] hover:bg-[#c83d21] transition lg:w-[150px] w-full rounded-3xl py-3 text-center">
                            <p className="text-white text-[18px] font-medium">Get In Touch</p>
                        </a>
                    </div>
                </div>

                {/* Section Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src={"/Landing/photo_work_with_me.svg"}
                        alt="photo-work-with-me"
                        width={700}
                        height={700}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
