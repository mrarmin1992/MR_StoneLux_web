'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cards({ blogs }) {
  const router = useRouter();
  const [loading, setLoading] = useState(null);

  const handleNavigate = (href, key) => {
    setLoading(key);
    router.push(href);
  };

  const sortedBlogs = blogs
    ?.slice()
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

                <p className="clamp">
                  {blog.excerpt
                    ? blog.excerpt
                    : blog.shortDescription?.length > 150
                      ? blog.shortDescription.slice(0, 150) + '...'
                      : blog.shortDescription}
                </p>

                <button
                  className="read-more-button"
                  onClick={() => handleNavigate(`/blog/${blog.slug}`, blog._id)}
                  disabled={loading === blog._id}
                >
                  {loading === blog._id ? <span className="loader"></span> : "Pogledaj detaljnije"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <button
            className="view-more-button"
            onClick={() => handleNavigate("/blog", "view-more")}
            disabled={loading === "view-more"}
          >
            {loading === "view-more" ? <span className="loader"></span> : "Pogledaj ostale projekte"}
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
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center; /* centrira dugme unutar card-content */
        }

        .read-more-button:disabled,
        .view-more-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .view-more {
          margin-top: 40px;
          display: flex;
          justify-content: center; /* centrira dugme u sredini sekcije */
        }

        .loader {
          border: 2px solid #fff;
          border-top: 2px solid #d4af37;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
