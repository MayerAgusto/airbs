import Image from 'next/image'
import {useState} from 'react'
export const InfoCard = ({img,location,title,description,star,price,total}) => {
  const [heart, setHeart] = useState(false)
  const handleHeart = () => {
    setHeart(!heart)
  }
  return(
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg first:border-t ">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image 
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          {
            heart
            ?
            <svg  onClick={handleHeart}
                className="h-7 cursor-pointer"     
              xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg>
            :
            <svg  onClick={handleHeart}
                className="h-7 cursor-pointer" 
 xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
          }
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"/>
        <p className="pt-2 text-sm text-gray-600 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
        <p className="flex items-center">
          <svg
            className="h-5 text-red-400"
            xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
          {star}
        </p>
        <div>
          <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
          <p className="text-right font-extralight">{total}</p>
        </div>
      </div>
      </div>
    </div>
  )
}