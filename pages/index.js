'use client';

import Navbar from '/components/Navbar';
import PageLayout from '@/components/PageLayout';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <PageLayout />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}