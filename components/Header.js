import React from 'react'

const Header = () => {
  return (
    <header className='py-4'>
      <h1 className='flex justify-center py-4 text-white text-8xl font-Grape-Nuts '>SLY</h1>
        <ul className='space-x-4 flex'>
          <li className=' cursor-pointer hover:underline'>Event</li>
          <li className=' cursor-pointer hover:underline'>Blogs</li>
          <li className=' cursor-pointer hover:underline'>Sponsors</li>
          <li className=' cursor-pointer hover:underline'>Gallery</li>
          <li className=' cursor-pointer hover:underline'>About</li>
        </ul>
    </header>
  )
}

export default Header