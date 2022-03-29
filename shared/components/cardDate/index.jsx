import { DateRangePicker } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { UsersIcon} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export const CardDate = ({inputSearch,setImputSearch}) => {
  const [startDate , setStartDate] = useState(new Date());
  const [endDate , setEndDate] = useState(new Date());
  const [guest, setGuest] = useState(1)
  const router = useRouter()
  
  const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }

  const handleDate = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const handleSearch = () => {
     router.push({
       pathname: '/search',
       query: {
         location: inputSearch,
         startDate: startDate.toISOString(),
         endDate: endDate.toISOString(),
         guest
       }
     })
  }
  return (
    <div className="flex flex-col col-span-3 mx-auto"> 
      <DateRangePicker
        onChange={handleDate}
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        locale={locales["es"]}
      />
      <div className="flex items-center border-b mb-4">
        <h2 className="text-2xl font-semibold flex-grow">
          Numero de personas
        </h2>
        <UsersIcon className="h-5" />
        <input
          value={guest}
          onChange={(e) =>setGuest(e.target.value) }
          min={1}
          className="w-12 pl-2 text-l text-red-400 outline-none"
          type="number" />
      </div>
      <div className="flex">
          <button 
            onClick={() => setImputSearch("")}
            className="flex-grow text-gray-500 hover:text-gray-900 hover:scale-105 transition duration-105 ease-out"
          >
            Cancelar
          </button>
          <button 
            onClick={handleSearch}
            className="flex-grow text-red-400">
            Buscar
          </button>
        </div>
    </div>
  )
}