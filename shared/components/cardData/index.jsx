import Image from 'next/image'

const MediaCard = ({img, title}) => {
  return(
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out"> 
      <div className="relative h-80 w-80">
        <Image 
          src={img}
          layout='fill'
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}
export const CardData = ({cardData}) => {
  return(
    <section>
      <h2 className="text-4xl font-semibold py-8"> 
        Live in Everywhere
      </h2>
      <div className="flex space-x-3 overflow-scroll  p-3 -ml-3 scrollbar-hide">
        {
          cardData?.map(item => (
            <MediaCard 
              key={item.img}
              img={item.img}
              title={item.title} 
            />
          ))
        }
      </div>
    </section>
  )
}