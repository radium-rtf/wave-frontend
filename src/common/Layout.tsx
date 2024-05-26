import React from 'react'

type LayoutType = {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutType> = ({children}) => {
  return (
    <>
      <div style={{
        margin: 50
      }}>
        <main>{children}</main>
      </div>
    </>
  )
}
