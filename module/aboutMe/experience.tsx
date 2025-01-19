import Image from 'next/image';
import React from 'react';

const Experience = () => {
    return (
        <div className="container mx-auto my-[80px] px-4 sm:px-8 lg:px-16 xl:px-20">
            <div className='work-experience'>
                <div className='flex gap-[16px] sm:gap-[32px] items-center'>
                    <Image src={'/aboutMe/work_experience.svg'} alt='work-experience' width={64} height={64} />
                    <h1 className='font-forum text-[32px] sm:text-[48px] lg:text-[61px] text-[#454545] font-[400]'>My Work Experience</h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-[16px] sm:gap-[32px] justify-between mt-[36px] sm:mt-[72px]'>
                    <div className='w-full'>
                        <h1 className='text-[24px] sm:text-[32px] lg:text-[39px] text-[#901F1C] font-[700]'>Content Production</h1>
                        <h1 className='text-[20px] sm:text-[28px] lg:text-[31px] text-[#5D5D5D] font-[600]'>ANTV</h1>
                    </div>
                    <div className='w-full text-end'>
                        <h1 className='text-[20px] sm:text-[28px] lg:text-[31px] text-[#5D5D5D] font-[500]'>Jan 2023 - Present</h1>
                    </div>
                </div>
                <div className='mb-10'>
                    <ul className="list-disc text-[#888888] mt-[24px] text-[20px] sm:text-[28px] lg:text-[31px] font-[400] border-b-2 pb-[36px] max-w-[calc(100%-8rem)] mx-auto">
                        <li>Job Description 1</li>
                        <li>Job Description 2</li>
                    </ul>
                </div>
            </div>

            <div className='education'>
                <div className='flex gap-[16px] sm:gap-[32px] items-center mt-[36px] sm:mt-[72px]'>
                    <Image src={'/aboutMe/education.svg'} alt='work-experience' width={64} height={64} />
                    <h1 className='font-forum text-[32px] sm:text-[48px] lg:text-[61px] text-[#454545] font-[400]'>Education</h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-[16px] sm:gap-[32px] justify-between mt-[36px] sm:mt-[72px]'>
                    <div className='w-full'>
                        <h1 className='text-[24px] sm:text-[32px] lg:text-[39px] text-[#901F1C] font-[700]'>Ilmu Komunikasi (Broadcast)</h1>
                        <h1 className='text-[20px] sm:text-[28px] lg:text-[31px] text-[#5D5D5D] font-[600]'>Telkom University</h1>
                    </div>
                    <div className='w-full text-end'>
                        <h1 className='text-[20px] sm:text-[28px] lg:text-[31px] text-[#5D5D5D] font-[500]'>2016 - 2020</h1>
                    </div>
                </div>
                <div className='mb-10'>
                    <ul className="list-disc text-[#888888] mt-[24px] text-[20px] sm:text-[28px] lg:text-[31px] font-[400] border-b-2 pb-[36px] max-w-[calc(100%-8rem)] mx-auto">
                        <li>Job Description 1</li>
                        <li>Job Description 2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
