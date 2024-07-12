interface ProfilesProps {
    name: string;
    username: string;
    avatar: string;
}

export function Profiles({ name, username, avatar }: ProfilesProps) {
    return (
        <li className='hover:bg-gray-900 rounded p-2 flex items-center justify-between'>
            <div className='flex items-center'>
                <img src={avatar} alt="ImgPerfilSugerido" className='w-12 rounded-full' />
                <div className='ml-2'>
                    <a className='font-bold hover:underline'>{name}</a>
                    <p className='text-gray-500'>{username}</p>
                </div>
            </div>
            <button className='rounded-full bg-white hover:bg-slate-200 text-black p-3 text-sm mr-2'>
                Seguir
            </button>
        </li>
    );
}
