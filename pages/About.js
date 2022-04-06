import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => {
  return (
    <div className='h-screen flex flex-col items-center bg-gradient-to-b from-cyan-800 via-white'>
      <Header />
     <main className=' h-full flex flex-col justify-center items-center'>
        <h1>About page</h1>
     </main>
     <Footer />
    </div>
  )
}

export default About