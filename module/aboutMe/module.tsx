import BaseLayout from "@/components/layouts/baseLayout";
import React from "react";
import Experience from "./experience";

import Skill from "./skill";
import Description from "./Desription";
import WhatIDo from "./whatIDo";

const AboutMeModule = () => {
  return (
    <BaseLayout>
      <Description />
      <Experience />
      <Skill />
      <WhatIDo />
    </BaseLayout>
  );
};

export default AboutMeModule;
