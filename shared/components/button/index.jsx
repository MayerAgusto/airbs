export const TinyButton = ({title}) => {
  return(
    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95  active:bg-gray-100 transition transform duration-100 ease-out">
      {title}
    </p>
  )
}