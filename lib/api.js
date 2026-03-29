import { client } from "./sanity";

// GET ALL BLOGS
export async function getAllBlogs() {
  return await client.fetch(`
    *[_type == "blog"] | order(date desc){
      _id,
      title,
      subtitle,
      tag,
      "slug": slug.current,
      date,
      shortDescription,
      "excerpt": shortDescription[0...150],
      "image": coverImage.asset->url
    }
  `);
}

// GET SINGLE BLOG
export async function getSingleBlog(slug) {
  return await client.fetch(`
    *[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      subtitle,
      tag,
      date,
      "image": coverImage.asset->url,
      "slug": slug.current,
      description
    }
  `, { slug });
}