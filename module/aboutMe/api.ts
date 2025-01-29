import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAboutMePage = () => {
  return useQuery({
    queryKey: ["about-me-page"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/about?populate=work_experiences&populate=my_skills.skill_category&populate=my_skills.image&populate=what_i_dos.image&populate=profile_picture&populate=educations`
      );
      return data?.data;
    },
  });
};
