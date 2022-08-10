import type { NextPage } from 'next'
import Head from 'next/head'
import CoverImage from '../components/CoverImage'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JO PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
       <Header />
       <Hero />
       <CoverImage />
       </main>
       
    </div>
  )
}

export default Home
