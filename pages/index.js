'use client';

import Navbar from '/components/Navbar';
import PageLayout from '@/components/PageLayout';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Values from '@/components/Values';

export default function Home() {
  return (
    <div>
      <Navbar />
      <PageLayout />
      <AboutUs />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}