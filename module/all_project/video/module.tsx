import BaseLayout from "@/components/layouts/baseLayout";
import React from "react";
import Jumbotron from "./jumbotron";
import ListProjectVideo from "./list_project";

const AllPageVideoModule = () => {
  return (
    <BaseLayout>
      <Jumbotron />
      <ListProjectVideo />
    </BaseLayout>
  );
};

export default AllPageVideoModule;
