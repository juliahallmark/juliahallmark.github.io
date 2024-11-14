import { defineConfig } from "tinacms";
import { about } from "./templates/about";
import { books } from "./templates/books";
import { bookLists } from "./templates/bookLists";
import { posts } from "./templates/posts";
import { siteConfig } from "./templates/siteConfig";

export default defineConfig({
  branch: 'main',
  clientId: '12e0d590-1229-47f9-8dfd-4273adf30f7a',
  token: 'b8772c17cdef678455d764ea599ff66989f66184',
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
