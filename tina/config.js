import { defineConfig } from "tinacms";
import { about } from "./templates/about";
import { books } from "./templates/books";
import { bookLists } from "./templates/bookLists";
import { posts } from "./templates/posts";
import { siteConfig } from "./templates/siteConfig";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "09d59101-3dac-45f8-b0ea-9b83fc07ce5a", // Get this from tina.io
  token: "40b508ae6891ca84a04c968c62af806d8cf845a2", // Get this from tina.io
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
