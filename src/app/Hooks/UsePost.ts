import axios, { AxiosResponse } from "axios";
import { PostData } from "../Interface/PostData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://localhost:8080";

const fetchData = async (): Promise<AxiosResponse<PostData[]>> => {
    try{
    const response = await axios.get<PostData[]>(API_URL + "/post");
    return response;
} catch (error) {
    console.error(error);
    throw new Error("Error fetching data");
}
}
export function UsePostData() {
    const query = useQuery({
        queryKey: ['post-data'],
        queryFn: fetchData,
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    }
    }
