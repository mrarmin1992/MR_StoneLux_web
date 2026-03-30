import { useState, useEffect } from "react";

export default function AboutUs() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 40; // krajnja vrijednost
    const duration = 2000; // trajanje animacije u ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">O nama</h2>

        <div className="about-grid">
          {/* LIJEVA STRANA */}
          <div>
            <p className="about-text">
              Obrada kamena za nas nije samo zanat – ona je odgovornost prema
              materijalu i simbolici koju nosi. Svakom projektu pristupamo
              pažljivo i individualno, s naglaskom na preciznost, trajnost i
              estetsku vrijednost gotovog rada. Naš cilj je da svaki izrađeni
              komad ostavi trajan utisak i ispuni očekivanja naših klijenata da
              bi nam se vratili i preporučili drugima.
            </p>
            <p className="about-text">Naše usluge obuhvataju:</p>
            <ul className="about-text">
              <li>Izradu nišana i spomenika</li>
              <li>Obradu mermera i granita</li>
              <li>Uređenje enterijera i eksterijera</li>
            </ul>
          </div>

          {/* DESNA STRANA */}
          <div>
            <p className="about-text">
              Naš rad temelji se na bogatoj tradiciji koju je započeo Ramadan
              Mašović, majstor obrade prirodnog kamena još prije više od 30
              godina. Spojem tradicionalnih metoda i savremenih tehnologija
              nastoji graditi kvalitet i povjerenje klijenata. Porodična tradicija
              se prenosi postepeno na novu generaciju, gdje sin nastavlja očevim
              putem, uvodeći savremene tehnologije i prateći nove trendove, ali uz
              očuvanje autentičnog, tradicionalnog pristupa koji predstavlja
              suštinu istinskog kvaliteta.
            </p>
            <p className="about-text">
              {"U kamenu ostaje ono što vrijeme ne briše."}
            </p>

            {/* ISKUSTVO */}
            <div className="experience-box">
              <h1>{count}+</h1>
              <p>Godina iskustva</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 80px 20px;
          background-color: #111;
          color: #fff;
        }

        .about-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-title {
          font-size: 2.5rem;
          margin-bottom: 40px;
          text-align: left;
          color: #ffd700;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .about-text {
          font-size: 0.9rem;
          line-height: 1.8;
          color: #ccc;
          margin-bottom: 20px;
          text-align: left;
        }

        .services-list {
          margin-top: 20px;
          margin-left: 0;
          padding-left: 0;
          list-style-position: outside;
        }

        .services-list li {
          margin-bottom: 10px;
          margin-left: 0;
          color: #ffd700;
          font-weight: 500;
        }

        .experience-box {
          margin-top: 30px;
          padding: 20px;
          background: rgba(255, 215, 0, 0.1);
          border-left: 4px solid #ffd700;
        }

        .experience-box h1 {
          font-size: 3rem;
          color: #ffd700;
          margin: 0;
        }

        .experience-box p {
          margin: 5px 0 0;
          color: #ccc;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
