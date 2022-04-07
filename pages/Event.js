import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const Event = () => {
  return (
    <Layout>
      <Header />
     <main className=' h-full flex flex-col justify-center items-center'>
        <h1>Event</h1>
     </main>
     <Footer />
    </Layout>
  )
}

export default Event