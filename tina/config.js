import { defineConfig } from "tinacms";
import { book } from "./models/book";
import { bookFields } from "./templates";
import { postFields } from "./templates";
import { profileFields } from "./templates";
import { site_configFields } from "./templates";

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
      // {
      //   format: "md",
      //   label: "Blog Posts",
      //   name: "posts",
      //   path: "_posts",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [
      //     ...bookFields(),
      //   ],
      // },
      book,
      // {
      //   format: "md",
      //   label: "Children's Page",
      //   name: "childrens_page",
      //   path: "/",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "children",
      //   },
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //   ],
      // },
      // {
      //   format: "md",
      //   label: "Young Adult Page",
      //   name: "young_adult_page",
      //   path: "/",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "young-adult",
      //   },
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //   ],
      // },
      // {
      //   format: "md",
      //   label: "Profile",
      //   name: "profile",
      //   path: "/",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "about",
      //   },
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //     {
      //       type: "string",
      //       name: "my_name",
      //       label: "my name",
      //     },
      //     {
      //       type: "image",
      //       name: "photo",
      //       label: "profile picture",
      //     },
      //     {
      //       type: "string",
      //       name: "email",
      //       label: "email address",
      //     },
      //     {
      //       type: "object",
      //       name: "find_me_on",
      //       label: "external link details",
      //       list: true,
      //       fields: [
      //         {
      //           type: "string",
      //           name: "url",
      //           label: "url",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   format: "yml",
      //   label: "Site Configuration",
      //   name: "site_configuration",
      //   path: "/",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "_config",
      //   },
      //   fields: [
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "website title",
      //       required: true,
      //     },
      //     {
      //       type: "string",
      //       name: "description",
      //       label: "description",
      //       ui: {
      //         component: "textarea",
      //       },
      //     },
      //     {
      //       type: "image",
      //       name: "logo",
      //       label: "logo",
      //     },
      //     {
      //       type: "string",
      //       name: "url",
      //       label: "url",
      //       required: true,
      //     },
      //     {
      //       type: "string",
      //       name: "homepage_greeting",
      //       label: "homepage greeting",
      //     },
      //     {
      //       type: "number",
      //       name: "paginate",
      //       label: "blog posts per page",
      //     },
      //     {
      //       type: "string",
      //       name: "newsletter",
      //       label: "newsletter sign up url",
      //     },
      //     {
      //       type: "string",
      //       name: "advanced_footer_html",
      //       label: "advanced footer code",
      //       ui: {
      //         component: "textarea",
      //       },
      //     },
      //   ],
      // },
    ],
  },
});
