import Navbar from '@/components/Navbar';
import PageLayout from '@/components/PageLayout';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Values from '@/components/Values';
import Cards from '@/components/Cards';
import Materijali from '@/components/Materijali';
import Head from 'next/head';

import { getAllBlogs } from '../lib/api';


debugger
export default function Home({blogs}) {
  return (
    <>
      <Head>
        <title>MR StoneLux - Kamenorezačka radnja Sjenica</title>
        <meta name="description" content="Izrada spomenika, mermer i granit. Tradicija i kvalitet." />
      </Head>

      <div>
        <Navbar />
        <PageLayout />
        <AboutUs />
        <Values />
        <Cards blogs={blogs} />
        <Materijali />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}

