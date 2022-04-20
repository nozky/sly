import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='layout min-h-screen flex flex-col items-center bg-gradient-to-br from-[#141e30] to-[#243b55] text-slate-100 sm:p-8 '>
      {children}
    </div>
  )
}

export default Layout