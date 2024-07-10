import {Bookmark, Search, Twitter, Bell, Mail, Scroll, User, Home as TtHome, CircleX} from 'lucide-react'
export default function Home() {
  return (
    <div className="h-screen flex ">

      <aside id="menus" className="w-1/4 p-4 border-r border-gray-800 flex flex-col justify-between">

  <nav className="space-y-4 pl-3">
    <a href="" className="flex py-2 "><Twitter /></a>
    <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out  rounded-full"><TtHome /><span className='ml-3'>Página inicial</span></a>
    <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out  rounded-full"><Search /><span className='ml-3'>Explorar</span></a>
    <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out  rounded-full"><Bell /><span className='ml-3'>Notificações</span></a>
    <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out  rounded-full"><Mail /><span className='ml-3'>Mensagens</span></a>
    <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out  rounded-full"><Bookmark /><span className='ml-3'>Salvos</span></a>
    <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out  rounded-full"><Scroll /><span className='ml-3'>Listas</span></a>
    <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out  rounded-full"><User /><span className='ml-3'>Perfil</span></a>
    <button className="py-2 w-full bg-blue-500 rounded-full hover:bg-blue-400 transition duration-200 ease-in-out">Postar</button>
  </nav>

  <footer id='my-profile' className='mt-auto'>
    <button className='w-full hover:bg-gray-700 transition duration-200 ease-in-out p-2 rounded-full'>
      <div className='flex items-center'>
        <img src='https://avatars.githubusercontent.com/u/77500452?v=4' alt="Minha foto de perfil" className='w-12 rounded-full' />
        <div className='ml-2'>
          <h3 className='font-bold '>Meu Nome</h3>
          <p className='text-gray-500'>@meuusuario</p>
        </div>
      </div>
    </button>
  </footer>
</aside>

      <main className="w-1/2 p-4">
        <div>Post</div>
        <div>Post</div>
      </main>



      <aside className="w-1/4 p-4 border-l border-x-gray-800">
      <div id="search" className="mb-4 relative">
    <form className='flex items-center'>
      <input type="text"
      placeholder='Search on Twitter'
      className='bg-gray-800 rounded-full text-white p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:bg-gray-950 focus:ring-blue-800'
      />
      <button
      className='absolute right-2 rounded-full transition duration-200 ease-in-out top-1/2 transform -translate-y-1/2 hover:bg-gray-700 p-2'
      ><CircleX/></button>
      <button id='SearchButton'
      className='absolute left-2 pl-2 '><Search className='w-4'/></button>
    </form>
</div>

        <div>
          <h3>Assuntos do momento</h3>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <div>
          <h3>Quem seguir</h3>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
      </aside>
    </div>
  );
}
