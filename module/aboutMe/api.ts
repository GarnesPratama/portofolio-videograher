import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAboutMePage = () => {
  return useQuery({
    queryKey: ["about-me-page"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/about?populate=*`
      );
      return data?.data;
    },
  });
};
