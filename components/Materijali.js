
    'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Materijali() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const materials = [
    {
        id: 1,
        title: "Mermer",
        description: "Mermer u građevinarstvu nosi titulu ukrasnog kamena. Mermer ima višestruku namenu sa tim što se pretežno koristi za izradu enterijera zbog svojih karakteristika ali se takođe može koristiti I za izradu eksterijera.",
        image: "/assets/fototapete-crni-mermer.jpg"
    },
    {
        id: 2,
        title: "Granit",
        description: "Granit je material kog karakterišu izuzetno visoka tvrdoća I izdržljivost. Ima višestruku namenu za izradu elemenata enterijera i eksterijera. U odnosu na mermer i još neke vrste kamena je teži za obradu ali na granit spoljašni faktori nemaju toliko uticaja kao na ostale materijale.",
        image: "/assets/Kamen_granit_Forest_Black.jpg"
    },
    {
        id: 3,
        title: "Travertin",
        description: "ravertino ili travertine kamen je prirodni dekorativni kamen kojeg karakterišu različite nijanse uglavnom braonkaste boje. Ovaj material je otporan na sve vremenske prilike. Najčešće se koristi za fasade, enterijere..",
        image: "/assets/Travertin-Rosso.jpg"
    },
    {
        id: 4,
        title: "Oniks",
        description: "Oniks je hemijska sedimentna stena I pripada grupi karbonatnih stena. Koristi se kao ukrasni kamen. Čest je izbor u vertikalnim aplikacijama, jer može stvoriti lepe i upečatljive efekte ako se postavi na zid ili prednji deo kamina.",
        image: "/assets/MaterialiVrstaListHandler.jpeg"
    },
    {
        id: 5,
        title: "Kvarc",
        description: "Kvarc je drugi najrasprostranjeniji mineral u Zemljinoj kontinentalnoj kori. Kvarc je izuzetno izdržljiv kamen I gotovo je otporan na sve spoljašne faktore.",
        image: "/assets/kvarc-jupiter-2020.jpg"
    }
  ];

  const handleNavigate = () => {
    setLoading(true);
    router.push("/kamen");
  };

  return (
    <>
      <section id="materijali" className="materials-section">
        <div className="materials-grid">

          {/* INTRO BLOK */}
          <div className="materials-intro">
            <h2>Materijali</h2>
            <p>
              Firma obuhvata širok spektar obrade kamenog materijala.
              U ponudi izdvajamo vrhunske prirodne i moderne materijale
              koji garantuju dugotrajnost i estetiku.
            </p>
            <button 
              className="view-more-button" 
              onClick={handleNavigate} 
              disabled={loading}
            >
              {loading ? <span className="loader"></span> : "POGLEDAJ SVE"}
            </button>
          </div>

          {/* KARTICE */}
          {materials.map((mat) => (
            <div key={mat.id} className="material-card">
              <div
                className="hover-bg"
                style={{ backgroundImage: `url(${mat.image})` }}
              />
              <div className="overlay" />

              <div className="card-content">
                <h3>{mat.title}</h3>
                <p>{mat.description}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      <style jsx>{`
        .materials-section {
          padding: 100px 60px;
          background: linear-gradient(135deg, #f9f9f9, #ececec);
        }

        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 35px;
        }

        .materials-intro {
          grid-column: span 2;
          padding: 45px;
          border-radius: 20px;
          background: linear-gradient(135deg, #111, #2a2a2a);
          color: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .materials-intro h2 {
          font-size: 32px;
          margin-bottom: 20px;
          color: #d4af37;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .materials-intro p {
          font-size: 15px;
          color: #ddd;
          max-width: 600px;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .material-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 320px;
          display: flex;
          align-items: flex-end;
          padding: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.08);
        }

        .material-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        .hover-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1);
          transition: transform 0.6s ease, opacity 0.6s ease;
          z-index: 1;
        }

        .material-card:hover .hover-bg {
          transform: scale(1.15);
          opacity: 0.9;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent);
          z-index: 2;
        }

        .card-content {
          position: relative;
          z-index: 3;
          color: #fff;
        }

        .card-content h3 {
          font-size: 20px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .card-content p {
          font-size: 14px;
          opacity: 0.9;
        }

        .view-more-button {
          background: linear-gradient(135deg, #d4af37, #f1c94a);
          color: #000;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
          box-shadow: 0 5px 15px rgba(212,175,55,0.4);
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 120px;
        }

        .view-more-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .view-more-button:hover:enabled {
          background: linear-gradient(135deg, #f1c94a, #ffe680);
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(212,175,55,0.6);
        }

        .loader {
          border: 2px solid #000;
          border-top: 2px solid #fff;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .materials-intro {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .materials-intro {
            grid-column: span 1;
          }
        }
      `}</style>
    </>
  );
}
