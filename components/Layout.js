import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='layout h-screen flex flex-col items-center bg-gradient-to-b from-orange-400 via-orange-300'>
      {children}
    </div>
  )
}

export default Layout