
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import sly from '../assets/bg-image/bg1.png'


export default function Home() {

  return (
    <Layout >
      <Head>
        <title>Sly</title>
        <meta name="description" content="Best performing band in town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="h-full w-full">
        <div className=' relative w-full h-full text-slate-800' >
          <Image src={sly} alt="Band Photo" layout='fill' placeholder='blur' className='object-cover'/>
        </div>
      </main>

      <Footer />
    </Layout>
  )
}
