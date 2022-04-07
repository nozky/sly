import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <Header />
     <main className=' h-full flex flex-col justify-center items-center'>
        <h1>About page</h1>
     </main>
     <Footer />
    </Layout>
  )
}

export default About