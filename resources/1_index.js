'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '../resources/2_index.scss';

import logo from '../assets/logo1.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles['glass-navbar']}>
      <div className={styles['nav-container']}>

        {/* LOGO */}
        <a href="#">
          <Image src={logo} alt="logo" height={65} />
        </a>

        {/* LINKOVI */}
        <nav className={`${styles['nav-links']} ${open ? styles.open : ''}`}>
          <a href="#" className={styles['nav-link']}>Početna</a>
          <a href="#" className={styles['nav-link']}>O nama</a>
          <a href="#" className={styles['nav-link']}>Projekti</a>
          <a href="#" className={styles['nav-link']}>Kamen</a>
          <a href="#" className={styles['nav-link']}>Kontakt</a>
        </nav>

        {/* BUTTON */}
        <a href="#" className={styles['cta-btn']}>Prijava</a>

        {/* HAMBURGER */}
        <div
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}