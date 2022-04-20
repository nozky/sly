import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='layout h-screen flex flex-col items-center bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100'>
      {children}
    </div>
  )
}

export default Layout