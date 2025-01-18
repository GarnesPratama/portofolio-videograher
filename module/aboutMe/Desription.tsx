import Image from 'next/image'
import React from 'react'

const Description = () => {
    return (
        <div
            className="flex justify-between container mx-auto my-[80px]"
        >
            <div className='section-1 w-full text-[#5D5D5D]'>
                <div className='desc'>
                    <h1 className=' text-[61px] font-forum font-[400]'>Nice to Meet You!</h1>

                    <p className=' mt-[20px] text-justify'>I believe in the power of video to connect, inspire, and move audiences. Let's work together to create a unique and impactful video that will leave a lasting impression. I believe in the power of video to connect, inspire, and move audiences. Let's work together to create a unique and impactful video that will leave a lasting impression. I believe in the power of video to connect, inspire, and move audiences. Let's work together to create a unique and impactful video that will leave a lasting impression.

                        Let's work together to create a unique and impactful video that will leave a lasting impression.</p>
                </div>
                <div className='btn-cta mt-[60px]'>
                    <button className="">
                        <a
                            className="btn bg-[#E94B26] w-full rounded-3xl flex items-center justify-center px-4  text-white text-[20px] sm:text-base lg:text-lg font-[500]"
                            href="#projects"
                        >
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
            <div className='section-2 w-full'>
                <Image src={"/aboutMe/images.svg"} className=' mx-auto w-1/2' alt='images-avatar' width={50} height={50} />
            </div>
        </div>
    )
}

export default Description
