import React from 'react'

type LayoutType = {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutType> = ({children}) => {
  return (
    <>
      <header>HEADER</header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  )
}
