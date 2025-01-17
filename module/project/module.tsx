import BaseLayout from "@/components/layouts/baseLayout";
import React from "react";
import Jumbotron from "./jumbotron";

import ContentProject from "./content";

const AllPageModule = () => {
  return (
    <BaseLayout>
      <Jumbotron />
      <ContentProject />
    </BaseLayout>
  );
};

export default AllPageModule;
