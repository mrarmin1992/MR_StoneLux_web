'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../assets/logo1.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-navbar">
      <div className="nav-container">
        
        <a href="#" className="brand">
          <Image src={logo} alt="Stonelux logo" height={65} priority />
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#" className="nav-link">Početna</a>
          <a href="#" className="nav-link">O nama</a>
          <a href="#" className="nav-link">Projekti</a>
          <a href="#" className="nav-link">Kamen</a>
          <a href="#" className="nav-link">Kontakt</a>
        </nav>

        <a href="#" className="cta-btn">Prijava</a>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}