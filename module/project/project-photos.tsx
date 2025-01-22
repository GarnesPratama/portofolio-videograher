import { useRouter } from "next/router";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

const ListProjectPhoto = () => {
  const router = useRouter();

  const cards = [
    {
      title: "Forest Adventure",
      src: "/project/dummy_all_page_photo1.svg",
    },
    {
      title: "Valley of life",
      src: "/project/dummy_all_page_photo2.svg",
    },
    {
      title: "Forest Adventure",
      src: "/project/dummy_all_page_photo3.svg",
    },
    {
      title: "Valley of life",
      src: "/project/dummy_all_page_photo4.svg",
    },
    {
      title: "Forest Adventure",
      src: "/project/dummy_all_page_photo5.svg",
    },
    {
      title: "Valley of life",
      src: "/project/dummy_all_page_photo6.svg",
    },
    {
      title: "Forest Adventure",
      src: "/project/dummy_all_page_photo7.svg",
    },
    {
      title: "Valley of life",
      src: "/project/dummy_all_page_photo8.svg",
    },
  ];

  return (
    <a href="/all-project/1">
      <FocusCards cards={cards} />
    </a>
  );
};

export default ListProjectPhoto;
