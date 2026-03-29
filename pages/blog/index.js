import Head from 'next/head';
import { getAllBlogs } from '@/lib/api';
import { useRouter } from 'next/router';

export default function BlogPage({ blogs }) {
    const router = useRouter();

    const sortedBlogs = blogs
        ?.slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const handleNavigate = (slug) => {
        router.push(`/blog/${slug}`);
    };

    return (
        <>
            <Head>
                <title>Svi blogovi - MR StoneLux</title>
            </Head>

            <div className="page">
                {/* HEADER */}
                <div className="header">
                    <h1>Svi naši projekti</h1>
                    <p>Inspiracija, savjeti i priče iz našeg rada</p>

                    <button className="homeBtn" onClick={() => router.push('/')}>
                        ⬅ Početna
                    </button>
                </div>

                {/* GRID */}
                <div className="cards-grid">
                    {sortedBlogs?.map((blog, index) => (
                        <div
                            key={blog._id}
                            className="card"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <img
                                src={blog.image || '/assets/placeholder.jpg'}
                                className="card-img"
                                alt={blog.title}
                            />

                            <div className="card-content">
                                <div className="tags">
                                    <span className="tag">
                                        {blog.tag || 'Blog'}
                                    </span>
                                </div>

                                <p className="date">
                                    {blog.date
                                        ? new Date(blog.date).toISOString().split('T')[0]
                                        : ''}
                                </p>

                                <h3>{blog.title}</h3>

                                <p className="clamp">
                                    {blog.excerpt || blog.shortDescription}
                                </p>

                                <button
                                    className="read-more-button"
                                    onClick={() => handleNavigate(blog.slug)}
                                >
                                    Pogledaj detaljnije →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <style jsx>{`
          .page {
            min-height: 100vh;
            padding: 60px 20px;
            font-family: 'Inter', sans-serif;
            background: radial-gradient(circle at top, #f8f6f2, #ffffff);
          }

          .header {
            text-align: center;
            margin-bottom: 40px;
          }

          .header h1 {
            font-size: 42px;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #111, #555);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .header p {
            color: #777;
            margin-bottom: 20px;
          }

          .homeBtn {
            background: black;
            color: white;
            border: none;
            padding: 10px 16px;
            border-radius: 30px;
            cursor: pointer;
            transition: 0.3s;
          }

          .homeBtn:hover {
            transform: translateY(-2px);
            background: #333;
          }

          .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          }

          .card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: all 0.4s ease;
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
            transform: translateY(20px);
            display: flex;
  flex-direction: column;
          }

          .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 18px 45px rgba(0,0,0,0.15);
          }

          .card-img {
            width: 100%;
            height: 210px;
            object-fit: cover;
          }

          .card-content {
            padding: 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
          }

          .tags {
            margin-bottom: 8px;
          }

          .tag {
            font-size: 12px;
            background: #f1f1f1;
            padding: 4px 10px;
            border-radius: 20px;
          }

          .date {
            font-size: 12px;
            color: #999;
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
            color: #666;
            font-size: 14px;
          }

          .read-more-button {
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

          .read-more-button:hover {
            transform: scale(1.03);
            opacity: 0.9;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const blogs = await getAllBlogs();

    return {
        props: { blogs },
        revalidate: 60,
    };
}