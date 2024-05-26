import React from 'react'
import {Header} from './components/Header'

type LayoutType = {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutType> = ({children}) => {
  return (
    <>

     
      <Header />
      <main>{children}</main>
      {/* <footer>FOOTER</footer> */}

    </>
  )
}
