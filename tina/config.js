import { defineConfig } from "tinacms";
import { about } from "./models/about";
import { book } from "./models/book";
import { bookList } from "./models/bookList";
import { post } from "./models/post";

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
      post,
      about,
      bookList,
      book,
      {
        format: "yml",
        label: "Site Configuration",
        name: "site_configuration",
        path: "/",
        match: {
          include: "_config",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "website title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "logo",
            label: "logo",
          },
          {
            type: "string",
            name: "url",
            label: "url",
            required: true,
          },
          {
            type: "string",
            name: "homepage_greeting",
            label: "homepage greeting",
          },
          {
            type: "number",
            name: "paginate",
            label: "blog posts per page",
          },
          {
            type: "string",
            name: "newsletter",
            label: "newsletter sign up url",
          },
          {
            type: "string",
            name: "advanced_footer_html",
            label: "advanced footer code",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
    ],
  },
});
