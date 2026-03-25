'use client';

import { useState } from 'react';

const cards = [
  {
    title: 'Tradicija',
    text: 'Njegujemo dugogodišnju tradiciju obrade kamena, temeljenu na iskustvu i znanju koje se prenosi kroz godine rada i usavršavanja.'
  },
  {
    title: 'Iskustvo',
    text: 'Dugogodišnji rad u obradi kamena omogućio nam je duboko razumijevanje materijala i procesa. To iskustvo pretvaramo u preciznu izradu i pouzdana rješenja za naše klijente.'
  },
  {
    title: 'Kvalitet',
    text: 'Koristimo pažljivo odabrane vrste prirodnog kamena poznate po čvrstoći, postojanosti i dugom vijeku trajanja. Nema kvalitetnog posla bez kvalitetnog materijala'
  },
  {
    title: 'Izrada po mjeri',
    text: 'Svaki proizvod izrađujemo individualno, u skladu s vašim željama i potrebama. Često izlazimo iz naše zone komfora i preuzimamo izazovnije projekte u cilju razvoja. Posebnu pažnju posvećujemo detaljima i završnoj obradi.'
  }
];

export default function ValuesSection() {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="values">
      <div className="container">
        {/* Naslov sekcije */}
        <h2 className="section-title">Zašto odabrati nas?</h2>

        <div className="cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${active === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .values {
          padding: 80px 20px;
          background: #f5f5f5;
          color: #111;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 50px;
          color: #d4af37;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .card {
          background: white;
          color: #111;
          padding: 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          border: 1px solid #ddd;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .card.active {
          background: #d4af37;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(212,175,55,0.6);
        }

        h3 {
          margin-bottom: 15px;
        }

        p {
          font-size: 14px;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
