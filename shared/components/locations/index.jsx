import Image from 'next/image'

const SmallCard = ({img, location, distance}) => {
  return(
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100  hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image 
          src={img}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}
export const Locations = ({explerData}) => {
  return(
    <section className="pt-6">
      <h1 className="text-4xl font-semibold pb-5">Locacion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          explerData?.map(item=> (
            <SmallCard 
              key={item.img}
              img={item.img} 
              location={item.location}
              distance={item.distance}
            />
          ))
        }
      </div>
    </section>
  )
}