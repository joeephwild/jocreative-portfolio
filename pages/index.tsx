import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import About from '../components/About';
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JO PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
