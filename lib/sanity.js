import imageUrlBuilder from "@sanity/image-url";

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  useCdn: true,
  apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);