'use client';

import Link from 'next/link';

export default function StoneOffer() {
  // Primjer podataka – ti ćeš dodati svoje slike i opise
  const stones = [
    { name: 'Blanko Celta', img: '/assets/Blanco-Celta.jpg' },
    { name: 'G 635', img: '/assets/G635.jpg' },
    { name: 'Nero Zimbabwe', img: '/assets/nero-zimbabwe.jpg' },
    { name: 'Monte Vedeo', img: '/assets/Monte-Vedeo.jpg' },
    { name: 'Pearl Grey', img: '/assets/Pearl-Grey.jpg' },
    { name: 'Rosa Porrino', img: '/assets/Rosa-Porrino.jpg' },
    { name: 'Rosa Beta', img: '/assets/Rosa-Beta.jpg' },
    { name: 'G654-1', img: '/assets/G654-1.jpg' },
    { name: 'Madura Gold', img: '/assets/Kamen_granit_Madura_Gold.jpg' },
    { name: 'Viscont White', img: '/assets/viscont-white.jpg' },
    { name: 'Absolute Black', img: '/assets/absolute-black-granit.jpg' },
    { name: 'Vizag Blue', img: '/assets/vizag-blue.jpg' },
    { name: 'New Imperial', img: '/assets/New-Imperial.jpg' },
    { name: 'Multicolor', img: '/assets/Multicolor.jpg' },
    { name: 'Marinate Red', img: '/assets/Marinace-Red.jpg' },
    { name: 'Verde Marina', img: '/assets/verde_marina.jpg' },
    { name: 'Oscuro Mist', img: '/assets/Oscuro-Mist.jpg' },
    { name: 'Night Snow', img: '/assets/Night-Snow.jpg' },
    { name: 'Paradiso-Bash', img: '/assets/Paradiso-Bash.jpg' },
    { name: 'Labrador-Emerald-Pearl', img: '/assets/Labrador-Emerald-Pearl.jpg' },
    { name: 'Paradiso Classic', img: '/assets/Paradiso-Classic.jpg' },
    { name: 'Nero Santiago', img: '/assets/Nero-Santiago.jpg' },
    { name: 'Ivory Brown', img: '/assets/Ivory-Brown.jpg' },
    { name: 'Juparana India', img: '/assets/Juparana-India.jpg' },
    { name: 'New Crystal', img: '/assets/New-Crystal.jpg' },
    { name: 'Premium Black', img: '/assets/Premium-Black.jpg' },
    { name: 'Frost White', img: '/assets/Frost-White.jpg' },
    { name: 'Juparana Kina', img: '/assets/Juparana-Kina.jpg' },
    { name: 'Steel Grey', img: '/assets/Steel-Grey.jpg' },
    { name: 'Meera White', img: '/assets/Meera-White.jpg' },
    { name: 'Guna Black', img: '/assets/Guna-Black.jpg' },
    { name: 'Bengal Black', img: '/assets/Bengal_Black.jpg' },
    { name: 'Splendor White', img: '/assets/Splendor_White.jpg' },
    { name: 'Impala Black', img: '/assets/Impala_Black.jpg' },
    { name: 'Gibli', img: '/assets/Gibli.jpg' },
    { name: 'JPeregrine', img: '/assets/Peregrine.jpg' },
    { name: 'Porinno China', img: '/assets/Porinno_China.jpg' },
    { name: 'River Black', img: '/assets/river-black-.jpg' },
    { name: 'Halayeb', img: '/assets/Halayeb.jpg' },
    { name: 'Ocean Blue', img: '/assets/Ocean_Blue_.jpg' },
    { name: 'Blue Dunes', img: '/assets/Blue_Dunes.jpg' },
    { name: 'Impala Africa', img: '/assets/Impala_Africa.jpg' },
    { name: 'New Halayeb', img: '/assets/New_Halayeb.jpg' },
    { name: 'Kamen granit Alaska Blue', img: '/assets/Kamen_granit_Alaska_Blue.jpg' },
    { name: 'Kamen granit Azzaro', img: '/assets/Kamen_granit_Azzaro.jpg' },
    { name: 'Kamen granit Mont Bleu', img: '/assets/Kamen_granit_Mont_Bleu.jpg' },
    { name: 'Kamen granit Volga Blue', img: '/assets/Kamen_granit_Volga_Blue.jpg' },
    { name: 'Kamen granit Forest Black', img: '/assets/Kamen_granit_Forest_Black.jpg' },
    { name: 'Kamen granit Golden Oak', img: '/assets/Kamen_granit_Golden_Oak.jpg' },
    { name: 'Kamen granit Rose Nasr', img: '/assets/Kamen_granit_Rose_Nasr.jpg' },
    { name: 'Dyno Royal', img: '/assets/Dyno Royal.jpeg' },
    { name: 'Bijeli Mermer', img: '/assets/bijeli_mermer.jpg' },
    { name: 'Afyon Sivi', img: '/assets/Afyon_sivi.webp' }
  ];

  return (
    <section id = "kamen" className="offer">
        {/* Dugme za povratak na početnu */}
        <Link href="/" className="back-button">
          ← Početna
        </Link>
      <div className="container">
        <h2 className="section-title">Ponuda materijala</h2>

        <div className="grid">
          {stones.map((stone, index) => (
            <div key={index} className="card">
              <img src={stone.img} alt={stone.name} />
              <h3>{stone.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .offer {
          padding: 80px 20px;
          background: #111;
          color: #111;
        }

        .container {
          max-width: 1400px;
          margin: auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.0rem;
          margin-bottom: 50px;
          color: #d4af37;
          font-weight: regular;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 kolone */
          gap: 30px;
        }

        .card {
          background: #d4af37;
          border-radius: 12px;
          overflow: hidden;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card h3 {
          padding: 15px;
          font-size: 16px;
          color: #111;
        }

        @media (max-width: 992px) {
          .grid {
            grid-template-columns: repeat(2, 1fr); /* 2 kolone na tablet */
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr; /* 1 kolona na mobitel */
          }
        }
      `}</style>
    </section>
  );
}