import axios, { AxiosResponse } from "axios";
import { PostData } from "../Interface/PostData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): Promise<PostData[]> => {
    try {
        const response = await fetch(`${API_URL}/post`);
        
        if (!response.ok) {
            // Se a resposta não for OK, lança um erro
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: PostData[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Error fetching data");
    }
};



export function UsePostData() {
    const query = useQuery({
        queryKey: ['post-data'],
        queryFn: fetchData,
        retry: 2,
    });

    return {
        ...query,
        data: query.data,
    };
}
