import Image from "next/image";
import React from "react";

const Navbar = (props: any) => {
  return (
    <div className={`${props?.className} bg-transparent`}>
      <div className="container mx-auto">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden bg-orange-500 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a className="btn bg-[#E94B26] w-full rounded-3xl text-white">
                    Work With Me
                  </a>
                </li>
              </ul>
            </div>
            <Image src={"/logo.svg"} alt="logo" width={250} height={32} />
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-[400] text-[16px]">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end hidden lg:flex">
            <a
              className="btn bg-[#E94B26] w-[250px] rounded-3xl flex items-center justify-center"
              href="#"
            >
              <span className="text-white text-[18px] font-medium">
                Work With Me
              </span>
              <Image
                src={"/Landing/eva_diagonal-arrow-left-up-fill.svg"}
                alt="Arrow"
                width={20}
                height={20}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
