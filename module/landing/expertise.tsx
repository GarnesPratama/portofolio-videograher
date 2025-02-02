import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useGetMyExpertise } from "./api";

export default function Expertise() {
  const { data } = useGetMyExpertise();
  const expertise = [
    {
      title: "Video Editing",
      img: "/Landing/dummy_expertise.svg",
    },
    {
      title: "Cinematography",
      img: "/Landing/dummy_expertise.svg",
    },
    {
      title: "Color Grading",
      img: "/Landing/dummy_expertise.svg",
    },
    {
      title: "Motion Graphics",
      img: "/Landing/dummy_expertise.svg",
    },
    {
      title: "Adobe",
      description: "Premiere, After Effects, Photoshop",
      img: "/Landing/dummy_expertise.svg",
    },
  ];

  return (
    <div className="bg-[url('/Landing/BG_My%20Expertise.png')] h-full w-full bg-cover">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap lg:flex-nowrap ">
        <div className="w-full lg:w-[50%]">
          <motion.h2
            className="text-[30px] sm:text-[48px] lg:text-[61px] font-forum font-[400] text-[#454545] md:mb-4 mb-2 -mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }} // Animate when in view
          >
            My Expertise
          </motion.h2>
        </div>
        <div className="w-full lg:w-auto grid place-content-end">
          <motion.p
            className="text-[#888888] text-[18px] sm:text-[22px] lg:text-[25px] font-[400] md:mb-8 mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }} // Animate when in view
          >
            I combine technical expertise with creative vision to deliver
            exceptional results.
          </motion.p>
        </div>
      </div>
      <div className="lg:py-16 py-8 px-6 text-center container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-[100px] md:mx-10 mx-5 gap-4">
          {data?.map((item: any, index: any) => (
            <motion.div
              key={index}
              className={`flex flex-col-reverse lg:flex-row ${
                index % 4 < 2 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center text-center lg:text-left md:gap-4 gap-2`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }} // Animate when in view
            >
              <div className="md:w-52 md:h-24 w-32 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={item?.image?.url}
                  alt={item?.image?.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="lg:text-[30px] md:text-[25px] text-[21px] font-forum font-[400] text-[#5D5D5D]">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
