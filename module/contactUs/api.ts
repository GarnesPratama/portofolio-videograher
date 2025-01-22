import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const postContactUs = () => {
    return useMutation({
        mutationKey: ['contact-me'],
        mutationFn: async (form) => {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/contact-mes`, form)
            return data?.data;
        },
    }
    )
}