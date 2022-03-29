import {Footer} from '../../components'

export const MainLayout = ({children}) => {
  return(
    <>
      {children}
      <Footer />
    </>
  )
}