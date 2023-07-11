import { defineConfig } from "tinacms";
import { about } from "./templates/about";
import { books } from "./templates/books";
import { bookLists } from "./templates/bookLists";
import { posts } from "./templates/posts";
import { siteConfig } from "./templates/siteConfig";

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
      about,
      bookLists,
      books,
      siteConfig,
    ],
  },
});
