import { useState } from 'react';
import Image from 'next/image'
import {SearchIcon, UsersIcon, MenuIcon, UserCircleIcon, GlobeAltIcon} from '@heroicons/react/solid'
import {CardDate} from '../cardDate'
import { useRouter } from 'next/router'


 export const Header = ({placeholder}) =>{
   const [inputSearch, setImputSearch] = useState("");
   const router = useRouter()
   
  return(
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white/95 backdrop-blur-md shadow-md p-5 md:px-10">
      
      <div
        onClick={()=> router.push('/')}
        className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
           value={inputSearch}
          onChange={(e) => setImputSearch(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Empieza tu busqueda"} 
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2"/>
      </div>
      
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
      {inputSearch &&(
        <CardDate
          inputSearch={inputSearch}
          setImputSearch
        />
      )}
    </header>
  )
}
