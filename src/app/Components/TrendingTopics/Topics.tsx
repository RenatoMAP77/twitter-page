import { Ellipsis } from "lucide-react";

interface TopicsProps {
    category: string;
    text: string;
    posts: string;
}

export function Topics({ category, text, posts }: TopicsProps) {
    return (
        <li className='hover:bg-gray-900 rounded p-2 pl-4 flex items-center justify-between'>
            <div>
                <p className='text-sm text-gray-500'>{category}</p>
                <h3 className='font-bold text-lg'>{text}</h3>
                <p className='text-sm text-gray-500'>{posts} posts</p>
            </div>
            <button className='rounded-full hover:bg-blue-800 p-2 -mt-9'>
                <Ellipsis className='w-5 h-5' />
            </button>
        </li>
    );
}
