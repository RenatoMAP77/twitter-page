import { Ellipsis, Heart, MessageCircle, Repeat, Share , BadgeCheck, Bookmark, Eye} from 'lucide-react';


interface PostProps {
    idPost: number;
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
export function Post({idPost ,avatar, name, verifier, username, time, content, image, comments, retweets, likes, views, saved }: PostProps) {

  let idPostString = "post" + idPost || "post";
  let HourFromNow = new Date().getHours() - parseInt(time.split(":")[0]);
  let timeFromNow = HourFromNow > 0 ? HourFromNow + "h" : new Date().getMinutes() + "m";
 let viewsString = views.toString();
  if (views >1000000)
  {
    viewsString = (views/1000000).toFixed(1) + "M";
  }
  else if (views >1000)
  {
    viewsString = (views/1000).toFixed(1) + "K";
  }

    return (
        <div id= {idPostString} className=' border-b border-gray-800 flex p-4'>
           <a href="">
             <img src={avatar} alt="Avatar" className='w-12 h-12 rounded-full mr-4' />
            </a> 
            <div className='flex flex-col w-full' >

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <a href="" className='font-bold hover:underline'>{name}</a>
                        {verifier && <span className='text-blue-500 ml-1'> <BadgeCheck size={15} /></span>}
                        <span className='text-gray-500 ml-1'> @{username} · {timeFromNow}</span>
                    </div>
                    <button className='rounded-full hover:bg-blue-800 p-2 '>
                     <Ellipsis className='w-5 h-5' />
                     </button>

                </div>
                <p className='-mt-2'>{content}</p>
                <span className='flex items-center mt-2 '>
                    {image && <img src={image} alt='PostImage' className=' mt-2 max-h-52 max-w-52' />}
                </span>
                
                <div className='flex justify-between mt-4 text-gray-500'>
                    
          <button className='flex items-center space-x-2 hover:text-blue-500'>
            <MessageCircle className='rounded-full w-8 h-8 p-2 hover:bg-opacity-40 hover:bg-blue-600 ' />
            <span>{comments}</span>
          </button>
          
          <button className='flex items-center space-x-2 hover:text-green-500'>
            <Repeat className='rounded-full w-8 h-8 p-2 hover:bg-opacity-40 hover:bg-green-600' />
            <span>{retweets}</span>
          </button>
          
          <button className='flex items-center space-x-2 hover:text-red-500'>
            <Heart className='rounded-full w-8 h-8 p-2 hover:bg-opacity-40 hover:bg-red-600' />
            <span>{likes}</span>
          </button>
          
          <button className='flex items-center space-x-2 hover:text-blue-500'>
        <Eye className='rounded-full w-8 h-8 p-2 hover:bg-opacity-40 hover:bg-blue-600' />
            <span>{viewsString}</span>
          </button>

          <button className={`flex items-center ${saved ? 'text-blue-500' : 'hover:text-blue-500'} -mr-16`}>
              <Bookmark className='rounded-full w-8 h-8 p-2 hover:bg-opacity-40 hover:bg-blue-600' />
            </button>

            <button className='flex items-center hover:text-blue-500 -ml-10'>
              <Share className='rounded-full w-8 h-8 p-2 hover:bg-opacity-40 hover:bg-blue-600' />
            </button>
        </div>


            </div>
        </div>
    )
}