import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllProject = () => {
  return useQuery({
    queryKey: ["get-all-project"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/articles?populate=*`
      );
      return data?.data;
    },
  });
};

export const useGetProjectByDocumentId = (documentId: string) => {
  return useQuery({
    queryKey: ["get-project-by-documentId", documentId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/articles?filters[documentId][$eq]=${documentId}&populate=*`
      );
      return data?.data;
    },
  });
};

export const useGetOtherProject = (documentId: string) => {
  return useQuery({
    queryKey: ["get-other-project", documentId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/articles?filters[documentId][$ne]=${documentId}&populate=*`
      );
      return data?.data;
    },
  });
};
