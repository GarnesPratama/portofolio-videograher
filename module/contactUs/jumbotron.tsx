import React from 'react'

const Jumbotron = () => {
    return (
        <div
            className="-mt-20 text-white bg-cover bg-center h-96 sm:h-[30rem] lg:h-[35rem]"
            style={{ backgroundImage: "url('/project/jumbroton_all_project_video.png')" }}
        >
            <div className="w-full h-full flex flex-row justify-center items-center gap-0">
                <div className="font-forum font-bold text-white text-4xl sm:text-5xl lg:text-6xl text-center">
                    Get In Touch
                </div>
                <div className="transform relative lg:-top-8 -top-5 ">
                    <img
                        src="/project/wheel.svg"
                        alt="wheel"
                        className="w-8 md:w-12 h-auto"
                    />
                </div>
            </div>

        </div>
    )
}

export default Jumbotron
