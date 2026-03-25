'use client';

import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import logo from '../assets/logo1.png'; // prilagodi putanju

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">

      {/* OPIS */}
      <div className="description">
        <p>
          Tradicija, snaga i preciznost u obradi kamena. Spoj dugogodišnjeg iskustva i savremenih tehnologija, uz očuvanje autentičnog zanatskog duha.
        </p>
      </div>

      {/* LOGO */}
      <div className="logo">
        <Image src={logo} alt="StoneLux Logo" width={150} />
      </div>

      {/* SCROLL TO TOP */}
      <button className="scrollTop" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

      {/* COPYRIGHT */}
      <div className="copyright">
        © {new Date().getFullYear()} StoneLux. Developed by Armin Pezo.
      </div>

      <style jsx>{`
        .footer {
          background: #0d0d0d;
          color: #ccc;
          padding: 60px 20px 40px;
          text-align: center;
          position: relative;
        }

        .description {
          max-width: 600px;
          margin: auto;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .logo {
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .scrollTop {
          position: absolute;
          right: 20px;
          bottom: 80px;
          background: #d4af37;
          border: none;
          padding: 12px;
          border-radius: 50%;
          cursor: pointer;
          color: black;
          font-size: 16px;
          transition: 0.3s;
        }

        .scrollTop:hover {
          background: #b8962e;
          transform: translateY(-3px);
        }

        .copyright {
          margin-top: 20px;
          font-size: 14px;
          color: #777;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .scrollTop {
            right: 50%;
            transform: translateX(50%);
          }
        }
      `}</style>
    </footer>
  );
}