import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Sponsors = () => {
  return (
    <div className='h-screen flex flex-col items-center bg-gradient-to-b from-cyan-800 via-white'>
    <Header />
   <main className=' h-full flex flex-col justify-center items-center'>
      <h1>Sponsors</h1>
   </main>
   <Footer />
  </div>
  )
}

export default Sponsors