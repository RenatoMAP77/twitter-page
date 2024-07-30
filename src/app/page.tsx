"use client";
import { useState } from 'react';
import { Bookmark, Search, Twitter, Bell, Mail, Scroll, User, Home as TtHome, CircleX, Ellipsis } from 'lucide-react';
import { TrendingTopics } from './Components/TrendingTopics/TrendingTopics';
import { WhoToFollow } from './Components/WhoToFollow/WhoToFollow';
import { Post } from './Components/Post/Post';

export default function Home() {
  const [activeTab, setActiveTab] = useState('forYou');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-screen flex">
      <aside id="menus" className="w-1/4 p-4 border-r border-gray-800 flex flex-col justify-between">
        <nav className="space-y-4 pl-3">
          <a href="" className="flex py-2"><Twitter /></a>
          <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out rounded-full"><TtHome /><span className='ml-3'>Página inicial</span></a>
          <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out rounded-full"><Search /><span className='ml-3'>Explorar</span></a>
          <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out rounded-full"><Bell /><span className='ml-3'>Notificações</span></a>
          <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out rounded-full"><Mail /><span className='ml-3'>Mensagens</span></a>
          <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out rounded-full"><Bookmark /><span className='ml-3'>Salvos</span></a>
          <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out rounded-full"><Scroll /><span className='ml-3'>Listas</span></a>
          <a href="" className="flex py-2 hover:bg-gray-700 transition duration-200 ease-in-out rounded-full"><User /><span className='ml-3'>Perfil</span></a>
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

      <main className="w-1/2  ">

        <nav className="sticky top-0 bg-black  z-10 flex justify-around h-12 ">
          
          <button
            className={`px-4 py-2 font-bold  ${activeTab === 'forYou' ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-500'} 
             hover:bg-gray-700 container transition duration-200 ease-in-out`}
            onClick={() => handleTabClick('forYou')}
          >
            Para você
          </button>
          <button
            className={`px-4 py-2 font-bold rounded ${activeTab === 'following' ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-500'}
             hover:bg-gray-700 container transition duration-200 ease-in-out`}
            onClick={() => handleTabClick('following')}
          >
            Seguindo
          </button>
        </nav>
        
        <div className='overflow-y-scroll scrollbar-hide'>
          {activeTab === 'forYou' && (
            <div>
              <p>Conteúdo Para Você</p>
              {
                <><><Post avatar='https://avatars.githubusercontent.com/u/77500452?v=4'
                  name='Meu Nome'
                  username='meuusuario'
                  time='1h'
                  content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  verifier={true}
                  comments={0}
                  retweets={0}
                  likes={0}
                  views={0}
                  saved={true}
                  image='https://avatars.githubusercontent.com/u/77500452?v=4' /><Post avatar='https://avatars.githubusercontent.com/u/77500452?v=4'
                    name='Meu Nome'
                    username='meuusuario'
                    time='1h'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    verifier={true}
                    comments={0}
                    retweets={0}
                    likes={0}
                    views={0}
                    saved={true}
                    image='https://avatars.githubusercontent.com/u/77500452?v=4' /></><Post avatar='https://avatars.githubusercontent.com/u/77500452?v=4'
                      name='Meu Nome'
                      username='meuusuario'
                      time='1h'
                      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                      verifier={true}
                      comments={0}
                      retweets={0}
                      likes={0}
                      views={0}
                      saved={true}
                      image='https://avatars.githubusercontent.com/u/77500452?v=4' /><Post avatar='https://avatars.githubusercontent.com/u/77500452?v=4'
                        name='Meu Nome'
                        username='meuusuario'
                        time='1h'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        verifier={true}
                        comments={0}
                        retweets={0}
                        likes={0}
                        views={0}
                        saved={true}
                        image='https://avatars.githubusercontent.com/u/77500452?v=4' /><Post avatar='https://avatars.githubusercontent.com/u/77500452?v=4'
                          name='Meu Nome'
                          username='meuusuario'
                          time='1h'
                          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                          verifier={true}
                          comments={0}
                          retweets={0}
                          likes={0}
                          views={0}
                          saved={true}
                          image='https://avatars.githubusercontent.com/u/77500452?v=4' /></>
  

                  
              }
            </div>
          )}
          {activeTab === 'following' && (
            <div>
              <p>Conteúdo Seguindo</p>
              {/* Adicione mais conteúdo aqui */}
            </div>
          )}
        </div>
      </main>

      <aside className="w-1/4 pl-4 pr-4 pb-4 border-l border-x-gray-800 overflow-y-scroll scrollbar-hide">
        <nav className="sticky top-0 w-full bg-black z-10 pt-4 pb-2">
          <div id="search" className="mb-4">
            <form className='relative flex items-center'>
              <button id='SearchButton' className='absolute left-2 pl-2'>
                <Search className='w-4' />
              </button>
              <input
                type="text"
                placeholder='Search on Twitter'
                className='bg-gray-800 rounded-full text-white p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:bg-gray-950 focus:ring-blue-800'
              />
              <button className='absolute right-2 rounded-full transition duration-200 ease-in-out top-1/2 transform -translate-y-1/2 hover:bg-gray-700 p-2'>
                <CircleX />
              </button>
            </form>
          </div>
        </nav>
        <TrendingTopics />
        <WhoToFollow />
      </aside>
    </div>
  );
}
