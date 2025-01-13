import BaseLayout from "@/components/layouts/baseLayout";
import React from "react";
import About from "./about";
import Jumbotron from "./jumbotron";
import Project from "./project";

const LandingPageModule = () => {
  return (
    <BaseLayout>
      <Jumbotron />
      <About />
      <Project />
    </BaseLayout>
  );
};

export default LandingPageModule;
