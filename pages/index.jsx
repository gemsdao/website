import Head from 'next/head'
import { Navbar } from '../components/common'
import { HeroSection } from '../components/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>GemsDAO</title>
      </Head>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}
