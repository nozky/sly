
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import sly from '../assets/bg-image/sly-2.png'


export default function Home() {

  return (
    <Layout >
      
      <Head>
        <title>Sly</title>
        <meta name="description" content="Best performing band in town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="relative h-full w-full flex flex-col justify-center items-center">
        
        <div className='relative w-full h-[400px]'>
          <Image src={sly} layout='fill' objectFit='fill' alt='Sly Image' />
          <div className=' absolute flex flex-col text-slate-200 bottom-0 right-0 m-4'>
            <h2 className=' text-lg md:text-2xl mb-4 font-bold'>Band Information</h2>
            <p className=' text-sm md:text-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illum tenetur obcaecati dignissimos eaque voluptatem consequatur! Qui cum dolorum incidunt voluptates iusto perferendis facilis rerum quas? Laudantium enim sed quia!</p>
          </div>
        </div>

      </main>

        <div className='flex flex-col justify-center m-2'>
          <h2 className=' text-2xl my-4'>Recents</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos ipsum deleniti dolores esse, repudiandae natus tempore quas aperiam mollitia?</p>
        </div>


       <div className='m-4'>
         <h2 className='text-2xl'>Sponsors</h2>
        <div className='mt-8 border-t-2 border-slate-500 p-4 w-full grid grid-cols-1 sm:grid-cols-3 md:grid-col-4'>
            <div className=' border-2 border-slate-400 m-2 p-2 rounded-md' >
              <h3 className=' text-lg mb-2'>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vel.</p>
            </div>
            <div className=' border-2 border-slate-400 m-2 p-2 rounded-md' >
              <h3 className=' text-lg mb-2'>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vel.</p>
            </div>
            <div className=' border-2 border-slate-400 m-2 p-2 rounded-md' >
              <h3 className=' text-lg mb-2'>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vel.</p>
            </div>
            <div className=' border-2 border-slate-400 m-2 p-2 rounded-md' >
              <h3 className=' text-lg mb-2'>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vel.</p>
            </div>
            <div className=' border-2 border-slate-400 m-2 p-2 rounded-md' >
              <h3 className=' text-lg mb-2'>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vel.</p>
            </div>
            <div className=' border-2 border-slate-400 m-2 p-2 rounded-md' >
              <h3 className=' text-lg mb-2'>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vel.</p>
            </div>
        </div>
       </div>

      <Footer />
    </Layout>
  )
}
