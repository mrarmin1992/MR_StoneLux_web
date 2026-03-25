'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../assets/logo1.png';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="glass-navbar">
      <div className="nav-container">

        <a href="#" className="brand">
          <Image src={logo} alt="Stonelux logo" height={65} priority />
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#" className="nav-link" onClick={handleLinkClick}>Početna</a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>O nama</a>
          <a href="#projekti" className="nav-link" onClick={handleLinkClick}>Projekti</a>
          <a href="#materijali" className="nav-link" onClick={handleLinkClick}>Materijali</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>Kontakt</a>
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