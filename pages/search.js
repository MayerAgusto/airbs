import {MainLayout} from '../shared/layouts'
import { TinyButton, Header, InfoCard, Map} from '../shared/components'
import { useRouter } from 'next/router'
import {format} from "date-fns"
export default function Search ({searchResult}) {
  const router = useRouter()
  const {location,startDate,endDate,guest  } = router.query;

  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatStartDate} to ${formatEndDate}`
  return(
    <MainLayout>
      <Header placeholder={`${location} | ${range} | ${guest} guest`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs"> 300+ Stays - {range} - of {guest} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6"> Stay in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <TinyButton title="Cancelation Flexibility"/>
            <TinyButton title="Tipo de Lugares"/>
            <TinyButton title="Precio"/>
            <TinyButton title="Cuartos y Camas"/>
            <TinyButton title="Mas Filtros"/>
          </div>
          <div className="flex flex-col">
            {searchResult.map(({img,location,title,description,star,price,total}) => (
            <InfoCard 
              key={img}
              img ={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map />
        </section>
        
      </main>
    </MainLayout>
  )
}
export async function getServerSideProps(){
  const searchResult = await fetch('https://links.papareact.com/isz')
  .then((res)=> res.json())
    
  return{
    props: {
      searchResult,
    }
  }
}