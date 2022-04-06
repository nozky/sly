import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import sly from '../assets/bg-image/sly.jpg'


export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center bg-gradient-to-b from-cyan-800 via-white'>
      <Head>
        <title>Sly</title>
        <meta name="description" content="Best performing band in town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="h-full w-full bg-red-200">
        <div className=' relative w-full h-full bg-red-100 text-slate-800' >
          <Image src={sly} alt="Band Photo" layout='fill' objectFit='cover'/>
        </div>
      </main>

      <Footer />
     
    </div>
  )
}
