import React from "react";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";

const BaseLayout = (props: any) => {
  return (
    <div className="">
      <Navbar className={""} />
      <section>{props?.children}</section>
      <Footer />
    </div>
  );
};

export default BaseLayout;
