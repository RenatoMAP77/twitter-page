export interface PostData {
    id: number;
    avatar: string;
    name: string;
    verifier: boolean;
    username: string;
    time: string;
    content: string;
    image?: string;
    comments: number;
    retweets: number;
    likes: number;
    views: number;
    saved: boolean;
}