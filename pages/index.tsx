import type { NextPage } from 'next'
import Head from 'next/head'
import CoverImage from '../components/CoverImage'
import Features from '../components/Features'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JO PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
       <Header />
       <Hero />
       <CoverImage />
       <Features/>
       
    </div>
  )
}

export default Home
