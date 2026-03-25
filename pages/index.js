'use client';

import Navbar from '/components/Navbar';
import PageLayout from '@/components/PageLayout';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <div>
      <Navbar />
      <PageLayout />
      <AboutUs />
    </div>
  );
}