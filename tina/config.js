import { defineConfig } from "tinacms";
import { about } from "./templates/about";
import { books } from "./templates/books";
import { bookLists } from "./templates/bookLists";
import { posts } from "./templates/posts";
import { siteConfig } from "./templates/siteConfig";

export default defineConfig({
  branch: 'main',
  clientId: '09d59101-3dac-45f8-b0ea-9b83fc07ce5a',
  token: '375ffc4f69add1be82d71cdf1c62763c8d80e079',
  client: { skip: true },
  build: {
    outputFolder: "manage-site",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "/",
    },
  },
  schema: {
    collections: [
      posts,
      bookLists,
      books,
      about,
      siteConfig,
    ],
  },
});
