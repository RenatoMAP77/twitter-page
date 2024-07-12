import { Ellipsis } from "lucide-react";

interface TopicsProps {
    category: string;
    text: string;
    posts: string;
}

export function Topics({ category, text, posts }: TopicsProps) {
    return (
        <li className='hover:bg-gray-900 rounded p-2 pl-4'>
        <a href="" className='block'>
            <button className='rounded-full hover:bg-blue-800 absolute right-7'>
                <Ellipsis className='size-5' />
            </button>
            <p className='text-sm text-gray-500'>{category}</p>
            <h3 className='font-bold text-lg'>{text}</h3>
            <p className='text sm text-gray-500'>{posts} posts</p>
        </a>
    </li>
    );
    
}