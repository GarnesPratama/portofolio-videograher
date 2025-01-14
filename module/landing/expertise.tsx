import Image from "next/image";

export default function Expertise() {
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
    <div>
      <div className=" flex">
        <div className="w-[50%]">
          <h2 className="text-[61px] font-forum font-[400] text-[#454545] mb-4">
            My Expertise
          </h2>
        </div>
        <div className="w-full grid place-content-end">
          {" "}
          <p className="text-[#888888] text-[25px] font-[400] mb-8">
            I combine technical expertise with creative vision to deliver
            exceptional results.
          </p>
        </div>
      </div>
      <div className=" py-16 px-6 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-[100px] gap-4">
          {expertise.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row ${
                index % 4 < 2 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center text-center lg:text-left gap-4`}
            >
              <div className="w-52 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={312}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[30px] font-forum font-[400] text-[#5D5D5D]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
