import '../styles/globals.css';
import Header from '../components/Header'
import {AnimatePresence} from 'framer-motion';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AnimatePresence exitBeforeEnter initial={false}>
    <Header />
       <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
