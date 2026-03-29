import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { getSingleBlog, getAllBlogs } from "@/lib/api";

export default function BlogDetail({ blog }) {
  if (!blog) {
    return <div>Blog nije pronađen</div>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "90px 20px",
        fontFamily: "'Inter', sans-serif",
        background:
          "radial-gradient(circle at top, #e2e8f0 0%, #f8fafc 40%, #eef2f7 100%)",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* BACK BUTTON FIXED TOP-LEFT */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "10px 18px",
          background: "#D4AF37",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none",
          boxShadow: "0 5px 15px rgba(99,102,241,0.3)",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
      >
        ← Početna
      </Link>

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "rgba(99,102,241,0.15)",
          filter: "blur(120px)",
          borderRadius: "50%",
          top: "-100px",
          right: "-150px",
          zIndex: 0,
        }}
      />

      {/* MAIN CARD */}
      <div
        style={{
          maxWidth: "850px",
          width: "100%",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(18px)",
          borderRadius: "28px",
          padding: "50px 35px",
          boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
          border: "1px solid rgba(255,255,255,0.6)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "46px",
            fontWeight: "800",
            marginBottom: "12px",
            lineHeight: "1.15",
            color: "#0f172a",
            letterSpacing: "-1px",
            textAlign: "center",
          }}
        >
          {blog.title}
        </h1>

        {/* SUBTITLE */}
        {blog.subtitle && (
          <p
            style={{
              fontSize: "18px",
              color: "#64748b",
              marginBottom: "35px",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            {blog.subtitle}
          </p>
        )}

        {/* DATE LEFT */}
        {blog.date && (
          <p
            style={{
              fontSize: "16px",
              color: "#64748b",
              marginBottom: "12px",
              marginLeft: "15px",
              textAlign: "left",
              letterSpacing: "0.5px",
            }}
          >
            {new Date(blog.date).toISOString().split("T")[0]}
          </p>
        )}

        {/* IMAGE */}
        {blog.image && (
          <div
            style={{
              marginBottom: "45px",
            }}
          >
            <img
              src={urlFor(blog.image).width(900).url()}
              alt={blog.title}
              style={{
                width: "100%",
                borderRadius: "22px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {/* CONTENT */}
        <div
          style={{
            fontSize: "18px",
            lineHeight: "1.95",
            color: "#334155",
          }}
        >
          <PortableText
            value={blog.description}
            components={{
              block: {
                normal: ({ children }) => (
                  <p style={{ marginBottom: "20px" }}>{children}</p>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "35px 0",
                    }}
                  >
                    <img
                      src={urlFor(value).width(700).url()}
                      alt="blog"
                      style={{
                        width: "100%",
                        maxWidth: "550px",
                        borderRadius: "18px",
                        boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
                      }}
                    />
                  </div>
                ),
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();

  return {
    paths: blogs.map((b) => ({
      params: { slug: b.slug },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const blog = await getSingleBlog(params.slug);

  return {
    props: { blog },
    revalidate: 60,
  };
}