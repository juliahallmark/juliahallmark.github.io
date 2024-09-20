export const siteConfig = {
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
}