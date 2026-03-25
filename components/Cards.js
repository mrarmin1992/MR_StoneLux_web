'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Cards() {
    const router = useRouter();

    const posts = [
        {
            id: 1,
            title: "Nišan",
            excerpt: "Duborez u prirodnom mermeru, jedinstveno",
            tags: ["Bijeli mermer", "Nišan"],
            image: '/assets/IMG_5488.jpeg',
            link: "/blog/insights"
        },
        {
            id: 2,
            title: "Predulaz",
            excerpt: "Predulaz stambenog objekta odrađen u prelijepom bež kamenu",
            tags: ["Dyno Royal"],
            image: '/assets/IMG_5489.jpeg',
            link: "/blog/experiences"
        },
        {
            id: 3,
            title: "Uredjenje enterijera",
            excerpt: "Odrađen enterijer hotela Lane u Sjenici. Na slikama možete vidjeti detalje kako je to sve ispalo",
            tags: ["Madura Gold"],
            image: '/assets/IMG_5490.jpeg',
            link: "/blog/tips"
        },
        {
            id: 4,
            title: "Predulaz",
            excerpt: "Predulaz od crnog granita s lederfinish obradom. Vrhunski izgled uz zaštitu protiv klizanja. Kvalitet dugotrajnost i sigurnost na prvom mjestu",
            tags: ["Crni granit"],
            image: '/assets/IMG_5491.jpeg',
            link: "/blog/tips"
        },
        {
            id: 5,
            title: "Ograda",
            excerpt: "Poklopne ploče po ogradi od vrhunskog crnog granita. Precizna izrada, besprekorna obrada ivica i luksuzan izgled koji oplemenjuje svaki prostor.",
            tags: ["Crni granit"],
            image: '/assets/IMG_5492.jpeg',
            link: "/blog/tips"
        },
        {
            id: 6,
            title: "Kuhinja",
            excerpt: "Mermerne ploče u kahunji nikad ne izlaze iz mode. Ako želite eleganciju i bogat izgled vaše kuhinje javite nam se, a mi ćemo se pobrinuti za ostalo",
            tags: ["Beli Qartz"],
            image: '/assets/IMG_5493.jpeg',
            link: "/blog/tips"
        },
        {
            id: 7,
            title: "Stepenište",
            excerpt: "Stepenište radjeno od italijanskog mermera koji daje eleganciju i sofisticiranost u svakom koraku. ",
            tags: ["Diano Real", "NewHalayeb"],
            image: '/assets/IMG_5486.jpeg',
            link: "/blog/tips"
        },
        {
            id: 8,
            title: "Stepenište",
            excerpt: "Moderno stepenište izgrađeno od crnog Galaxy granita. Ovaj spoj kvalitetnih materijala donosi elegantan i sofisticiran izgled svakom prostoru",
            tags: ["Crni Galaxy", "New Halayeb"],
            image: '/assets/IMG_5487.jpeg',
            link: "/blog/tips"
        }
    ];

    const handleNavigate = (href) => {
        router.push(href);
    };

    return (
        <>
            <section id="projekti" className="blog-section">
                <h2>Završeni projekti</h2>
                <p className="subtitle">
                    Rezultati koji pričaju priču o našem radu – kvalitet, strast i iskustvo utkano u svaki projekt.
                </p>

                <div className="cards-grid">
                    {posts.map((post) => (
                        <div key={post.id} className="card">
                            <div className="image-wrapper">
                                <img src={post.image} alt={post.title} className="card-img" />
                                <div className="overlay"></div>
                            </div>
                            <div className="card-content">
                                <div className="tags">
                                    {post.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <button
                                    className="read-more-button"
                                    onClick={() => handleNavigate(post.link)}
                                >
                                    Pogledaj detaljnije
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-more">
                    <button
                        className="view-more-button"
                        onClick={() => handleNavigate("/blog")}
                    >
                        Pogledaj ostale projekte
                    </button>
                </div>
            </section>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blog-section {
          padding: 40px;
          text-align: center;
        }

        .subtitle {
          color: #666;
          margin-bottom: 30px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .card:hover .card-img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.2);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .tags {
          margin-bottom: 10px;
        }

        .tag {
          display: inline-block;
          background: #f0f0f0;
          color: #333;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          margin-right: 6px;
          transition: transform 0.2s ease;
        }

        .tag:hover {
          transform: scale(1.1);
        }

        h3 {
          margin: 10px 0;
          font-size: 18px;
        }

        h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 10px;
          color: #d4af37;
        }

        p {
          font-size: 14px;
          color: #555;
        }

        .read-more-button,
        .view-more-button {
          background-color: #d4af37;
          color: #fff;
          font-weight: bold;
          padding: 8px 14px;
          font-size: 13px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          margin-top: auto;
        }

        .read-more-button:hover,
        .view-more-button:hover {
          background-color: #b8860b;
          transform: translateY(-2px) scale(1.07);
        }

        .view-more {
          margin-top: 40px;
        }
      `}</style>
        </>
    );
}
