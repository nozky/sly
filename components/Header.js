import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/bg-image/sly-logo.png'

const Header = () => {
  return (
    <header className='flex items-center justify-evenly w-full space-x-6 p-2'>
        
        <div className="relative w-36 h-36">
          <Image src={logo} layout="fill" className='object-cover' />
        </div>

        <ul className='space-x-4 flex py-2 ml-auto'>
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