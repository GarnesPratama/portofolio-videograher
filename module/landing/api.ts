import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const useGetAboutMe = () => {
    return useQuery({
        queryKey: ['about-me'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/about`)
            return data?.data;
        },
    }
    )
}

export const useGetFeaturedProject = () => {
    return useQuery({
        queryKey: ['featured-project'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/articles`)
            return data?.data;
        },
    }
    )
}

export const useGetMyExpertise = () => {
    return useQuery({
        queryKey: ['my-expertise'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/skills`)
            return data?.data;
        },
    }
    )
}