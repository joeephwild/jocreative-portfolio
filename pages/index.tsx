import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import CoverImage from '../components/CoverImage'
import Features from '../components/Features'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JO PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
       <div className="w-full h-screen">
       <Hero />
       <CoverImage />
       <Features/>
       <About/>
       </div>
       
       
    </div>
  )
}

export default Home
