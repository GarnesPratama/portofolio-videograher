import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { useGetAllProject } from "./api";

interface ListProjectProps {
  selectedCategory:
    | "Video Editing"
    | "Color Grading"
    | "Cinematography"
    | "Photography";
}

const ListProjectPhoto: React.FC<ListProjectProps> = ({ selectedCategory }) => {
  const { data } = useGetAllProject();

  const filteredData = data?.filter((project: any) =>
    project.categories.some(
      (category: any) => category.name === selectedCategory
    )
  );

  const cards = filteredData?.map(
    (item: { cover: any; title: string; src: string; documentId: string }) => ({
      title: item?.title,
      src: item?.cover?.url,
      documentId: item?.documentId,
    })
  );

  return <FocusCards cards={cards} />;
};

export default ListProjectPhoto;
