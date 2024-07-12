import { Ellipsis } from "lucide-react";
import { Topics } from "./Topics";


export function TrendingTopics() {
    return (
      <div className='border rounded-2xl mt-3 mb-3   border-gray-800'>

        <h3 className='text-xl font-bold pl-4 pt-3'>O que está acontecendo</h3>
        <ul className='space-y-3 pt-2'>
          
          <Topics category={"Entretenimento"} text={"Superman"} posts={"100,5 mil"}/>
          
          <Topics category={"Esportes"} text={"NBA"} posts={"50,5 mil"}/>

          <Topics category={"Tecnologia"} text={"Apple"} posts={"200,5 mil"}/>

          <Topics category={"Notícias"} text={"Covid-19"} posts={"1,5 mi"}/>

          <Topics category="Política" text="Eleições" posts="1,5 mi" />
        </ul>
        <button className='flex text-blue-500 hover:bg-gray-900 w-full p-3 rounded-b-2xl '>Mostrar mais</button>  
        
      </div>
    );
}