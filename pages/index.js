import Head from 'next/head';
import Tutorial from '../components/ui/Tutorials';
import Footer from '../components/Footer';
import Roadmap from '../components/Roadmap';

export default function Home() {
  return (
    <>
      <Head>
        <title>iSock | Homepage</title>
      </Head>
      <Tutorial />
      <Roadmap />
      <Footer />
    </>
  )
}
