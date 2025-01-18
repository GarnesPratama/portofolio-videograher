import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA]">
      <div className="footer  text-base-content p-10 container mx-auto">
        <aside>
          <a href="/">
            <Image src={"/logo_black.svg"} alt="logo" width={250} height={32} />
          </a>

        </aside>
        <nav className="text-[#878789] text-[16px] font-[400]">
          <a className="link link-hover " href="/">Home</a>
          <a className="link link-hover" href="/all-project">Projects</a>
          <a className="link link-hover" href="/about-me">About Me</a>
          <a className="link link-hover" href="/contact-us">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#6C6C6E] text-[16px] font-[600]">
            Get In Touch
          </h6>
          <div className=" flex gap-4">
            <a className="link link-hover">
              <Image src={"/wa.svg"} alt="wa" width={20} height={20} />
            </a>
            <a className="link link-hover">
              <Image src={"/mail.svg"} alt="wa" width={20} height={20} />
            </a>
            <a className="link link-hover">
              <Image src={"/linkedin.svg"} alt="wa" width={20} height={20} />
            </a>
          </div>
        </nav>
      </div>
      <div className="w-full border-[#D0D0D1] h-4 border-t-2 container mx-auto"></div>
      <div className="py-[48px] text-[#454446] text-[16px] font-[400] container mx-auto text-center lg:text-start">
        © 2025 Rivandi Dwi Widjayanto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
