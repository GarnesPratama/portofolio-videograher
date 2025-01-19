import Image from 'next/image';
import React from 'react';

const Description = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between container mx-auto my-[80px] px-4 sm:px-8 lg:px-16 xl:px-20">
            <div className='section-1 w-full text-[#5D5D5D]'>
                <div className='desc'>
                    <h1 className='text-[32px] sm:text-[48px] lg:text-[61px] font-forum font-[400]'>Nice to Meet You!</h1>

                    <p className='mt-[25px] text-justify font-[400] text-[16px] sm:text-[18px] lg:text-[20px]'>I believe in the power of video to connect, inspire, and move audiences. Let's work together to create a unique and impactful video that will leave a lasting impression. I believe in the power of video to connect, inspire, and move audiences. Let's work together to create a unique and impactful video that will leave a lasting impression. I believe in the power of video to connect, inspire, and move audiences. Let's work together to create a unique and impactful video that will leave a lasting impression.

                        Let's work together to create a unique and impactful video that will leave a lasting impression.</p>
                </div>
                <div className='btn-cta mt-[60px]'>
                    <button className="">
                        <a
                            className="btn bg-[#E94B26] w-full rounded-3xl flex items-center justify-center px-4 text-white text-[16px] sm:text-[18px] lg:text-[20px] font-[500]"
                            href="#projects"
                        >
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
            <div className='section-2 w-full mb-10 lg:mb-0 flex justify-center lg:justify-end'>
                <Image src={"/aboutMe/images.svg"} className='w-3/4 sm:w-1/2 lg:w-1/2' alt='images-avatar' width={300} height={300} />
            </div>
        </div>
    );
};

export default Description;
