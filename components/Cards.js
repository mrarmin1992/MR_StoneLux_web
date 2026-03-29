'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Cards({ blogs }) {
  const router = useRouter();

  const posts = [
    {
      id: 1,
      title: "Nišan",
      excerpt: "Duborez u prirodnom mermeru, jedinstveno",
      tags: ["Bijeli mermer", "Nišan"],
      image: '/assets/IMG_5488.jpeg',
      link: "/blog/insights"
    }
  ];

  const handleNavigate = (href) => {
    router.push(href);
  };

  // SORT + LIMIT (najnoviji prvi, max 8)
  const sortedBlogs = blogs
    ?.slice() // kopija da ne mutira original
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8);

  return (
    <>
      <section id="projekti" className="blog-section">
        <h2>Završeni projekti</h2>
        <p className="subtitle">
          Rezultati koji pričaju priču o našem radu – kvalitet, strast i iskustvo utkano u svaki projekt.
        </p>

        <div className="cards-grid">
          {/* DYNAMIC BLOGS */}
          {sortedBlogs?.map((blog) => (
            <div key={blog._id} className="card">
              <div className="image-wrapper">
                <img
                  src={blog.image || '/assets/placeholder.jpg'}
                  alt={blog.title}
                  className="card-img"
                />
                <div className="overlay"></div>
              </div>

              <div className="card-content">

                {/* TAGS (SINGLE STRING FROM SANITY) */}
                <div className="top-row">
                  <div className="tags">
                    {blog.tag ? (
                      <span className="tag tag-primary">{blog.tag}</span>
                    ) : (
                      <span className="tag">Blog</span>
                    )}
                  </div>

                  <p className="date">
                    {blog.date
                      ? new Date(blog.date).toISOString().split('T')[0]
                      : ''}
                  </p>
                </div>

                <h3>{blog.title}</h3>

                {/* DESCRIPTION */}
                <p className="clamp">
                  {blog.excerpt
                    ? blog.excerpt
                    : blog.shortDescription?.length > 150
                      ? blog.shortDescription.slice(0, 150) + '...'
                      : blog.shortDescription}
                </p>

                <button
                  className="read-more-button"
                  onClick={() => handleNavigate(`/blog/${blog.slug}`)}
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

                .top-row {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 10px;
                }
                
                .date {
                  font-size: 12px;
                  color: #999;
                  margin: 0;
                }

                .card {
                  display: flex;
                  flex-direction: column;
                  background: #fff;
                  border: 1px solid #ddd;
                  border-radius: 12px;
                  overflow: hidden;
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .card:hover {
                  transform: translateY(-6px);
                  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
                }

                .image-wrapper {
                  position: relative;
                }

                .card-img {
                  width: 100%;
                  height: 200px;
                  object-fit: cover;
                }

                .overlay {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(0,0,0,0.2);
                  opacity: 0;
                  transition: opacity 0.3s ease;
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
                  font-size: 12px;
                  padding: 4px 8px;
                  border-radius: 4px;
                  margin-right: 6px;
                }

                .tag-primary {
                  background: whitesmoke;
                  color: black;
                }

                h3 {
                  margin: 10px 0;
                  font-size: 18px;
                }

                .date {
                  font-size: 12px;
                  color: #999;
                }

                .clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
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
                  margin-top: auto;
                }

                .view-more {
                  margin-top: 40px;
                }
            `}</style>
    </>
  );
}