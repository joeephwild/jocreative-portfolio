import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import About from '../components/About'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JO PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header />
       <main>
        <Banner/>
       <Skills/>
       <About/>
       <Contact/>
       </main>
       
    </div>
  )
}

export default Home
