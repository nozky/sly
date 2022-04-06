import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <h1 className='flex justify-center py-2 text-cyan-200 drop-shadow-lg text-6xl md:text-9xl font-Grape-Nuts'><Link href='/'>SLY</Link></h1>
        <ul className='space-x-4 flex py-2'>
          <li className=' cursor-pointer hover:underline'>
            <Link href='/Event'>
              <a>Event</a>
            </Link>
          </li>
          <li className=' cursor-pointer hover:underline'>
            <Link href='/Blog'>
              <a>Blogs</a>
            </Link>
          </li>
          <li className=' cursor-pointer hover:underline'>
            <Link href='/Sponsors'>
              <a>Sponsors</a>
            </Link>
          </li>
          <li className=' cursor-pointer hover:underline'>
            <Link href='/Gallery'>
              <p>Gallery</p>
            </Link>
          </li>
          <li className=' cursor-pointer hover:underline'>
            <Link href='/About'>
              <a>About</a>
            </Link>
          </li>
        </ul>
    </header>
  )
}

export default Header