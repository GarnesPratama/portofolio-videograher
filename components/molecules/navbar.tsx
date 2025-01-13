import Image from "next/image";
import React from "react";

const Navbar = (props: any) => {
  return (
    <div className={props?.className}>
      <div className=" container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
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
              </ul>
            </div>
            <Image src={"/logo.svg"} alt="logo" width={250} height={32} />
          </div>
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
          <div className="navbar-end">
            <a className="btn bg-[#E94B26] w-[250px] rounded-3xl flex">
              <p className=" text-white text-[18px] font-medium">
                Work With Me
              </p>
              <Image
                src={"/Landing/eva_diagonal-arrow-left-up-fill.svg"}
                alt="Arrow"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
