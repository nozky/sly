import React,{ useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/bg-image/sly-logo.png'
import { FaBars, FaArrowAltCircleRight  } from "react-icons/fa";

const Header = () => {

  const [isOpenNav, setIsOpenNav] = useState(false)
  const navRef = useRef(null)

  useEffect(()=>{
    if(isOpenNav){
      navRef.current.classList.remove('translate-x-full')
    }else{
      navRef.current.classList.add('translate-x-full')
    }
  },[isOpenNav])

  return (
    <header className='w-full flex p-6 justify-between items-center'>
        
        <div className=' w-12'>
          <Image src={logo} objectFit='contain' />
        </div>

        <div className=' cursor-pointer p-2 z-20 md:hidden' onClick={()=>{
          setIsOpenNav(!isOpenNav)
        }}>
          { isOpenNav? <FaArrowAltCircleRight /> : <FaBars /> }
        </div>
        
        <nav className=' bg-royal-light p-2 rounded-lg fixed top-0 right-0 bottom-0 left-0 z-10 flex flex-col justify-center translate-x-full duration-150 md:translate-x-0  md:static md:flex-row md:items-center' ref={navRef}>
          <ul className=' flex flex-col justify-center items-center w-full md:flex-row md:items-center'>
            <li className='p-2 hover:text-slate-500 cursor-pointer'>EVENTS</li>
            <li className='p-2 hover:text-slate-500 cursor-pointer'>GALLERY</li>
            <li className='p-2 hover:text-slate-500 cursor-pointer'>BLOG'S</li>
          </ul>
          <button className='text-red-500 p-2 ml-2 md:border-2 border-slate-500 md:rounded-md'>CONTACT</button>
        </nav>

    </header>
  )
}

export default Header