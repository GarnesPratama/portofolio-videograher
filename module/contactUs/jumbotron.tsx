import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const Jumbotron = () => {
    return (
        <div
            className="-mt-40 text-white bg-cover bg-center h-96 sm:h-[30rem] lg:h-[35rem]"
            style={{ backgroundImage: "url('/project/jumbroton_all_project_video.png')" }}
        >
            <div className="w-full h-full flex flex-row justify-center items-center gap-0">
                {/* Title with animation */}
                <motion.div
                    className="font-forum font-bold text-white text-4xl sm:text-5xl lg:text-6xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }} // Animate when in view
                >
                    Get In Touch
                </motion.div>
                {/* Wheel icon with animation */}
                <motion.div
                    className="transform relative lg:-top-8 -top-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }} // Animate when in view
                >
                    <img
                        src="/project/wheel.svg"
                        alt="wheel"
                        className="w-8 md:w-12 h-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Jumbotron;
