import BaseLayout from "@/components/layouts/baseLayout";
import React from "react";
import About from "./about";
import Jumbotron from "./jumbotron";
import Project from "./project";
import Expertise from "./expertise";
import GetInTouch from "./getInTouch";

const LandingPageModule = () => {
  return (
    <BaseLayout>
      <Jumbotron />
      <About />
      <Project />
      <div className="my-[80px] w-full">
        <Expertise />
      </div>
      <GetInTouch />
    </BaseLayout>
  );
};

export default LandingPageModule;
