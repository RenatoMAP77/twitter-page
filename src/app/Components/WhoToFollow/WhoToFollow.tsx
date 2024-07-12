import { Profiles } from "./Profiles";

export function WhoToFollow(){

    return (
        <div className='border rounded-2xl mt-3 mb-3   border-gray-800'>
          <h3 className="text-xl font-bold pl-4 pt-3">Quem seguir</h3>
          <ul className='space-y-3 pt-2'>
            
            <Profiles 
            name={"Renato"} 
            username={"@renatonMito"}
             avatar= {"https://avatars.githubusercontent.com/u/77500452?v=4"}></Profiles>
            <Profiles
            name={"NoobMaster OG"}
            username={"@NoobMaster69"}
            avatar={"https://avatars.githubusercontent.com/u/77500452?v=4"}></Profiles>

            <Profiles
            name={"Gustavo"}
            username={"@GustavoGamer"}
            avatar={"https://avatars.githubusercontent.com/u/77500452?v=4"}></Profiles>
          

          </ul>
          <button className='flex text-blue-500 hover:bg-gray-900 w-full p-3 rounded-b-2xl '>Mostrar mais</button>  
        </div>
    )
}