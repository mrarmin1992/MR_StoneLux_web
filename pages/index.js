'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../assets/logo1.png';
import hero from '../assets/naslovna.jpg';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-container">
      {/* NAVBAR */}
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

      {/* HERO SECTION */}
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <Image src={hero} alt="Naslovna slika" fill className="hero-image" priority />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Kamenorezačka radnja "MR StoneLux"</h2>
          <p>Majstori kamenorezačkog zanata</p>
        </div>
      </div>

      <style jsx>{`
        /* GLOBAL RESET */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          height: 100%;
        }
        
        .page-container {
          width: 100%;
          overflow-x: hidden;
        }
        
        /* GLASS NAVBAR */
        .glass-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          background-color: rgba(0,0,0,0.35);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.2);
          padding: 0.5rem 2rem;
          display: flex;
          justify-content: center;
        }
        
        .nav-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #ffd700;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: #ffd700;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .cta-btn {
          padding: 0.5rem 1.5rem;
          background-color: #ffd700;
          color: #000;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        
        .cta-btn:hover {
          background-color: #e6c200;
          color: #000;
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          transition: all 0.3s ease;
        }
        
        /* HERO SECTION */
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        
        .hero-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        
        .hero-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
          display: block;
          animation: zoomIn 15s ease-in-out forwards;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4));
          z-index: 1;
        }
        
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          color: #fff;
          text-align: center;
        }
        
        .hero-content h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1.5s ease forwards;
        }
        
        .hero-content p {
          font-size: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1.5s ease forwards;
          animation-delay: 0.5s;
          color: #ffd700;
        }
        
        /* ANIMACIJE */
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoomIn {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        
        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-links {
            display: none; /* sakrij linkove po defaultu */
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(0,0,0,0.9);
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 1rem 0;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
          }
        
          .nav-links.open {
            display: flex; /* prikaži kad je open */
            transform: translateY(0);
          }
        
          .cta-btn {
            display: none; /* sakrij dugme u mobilnoj verziji */
          }
        
          .hamburger {
            display: flex;
          }
        
          .nav-link {
            font-size: 12px;
          }
        
          .hero-content h2 {
            font-size: 1.5rem;
          }
        
          .hero-content p {
            font-size: 0.9rem;
          }
        }
                
      `}</style>
    </div>
  );
}
