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
      label: "Website Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Website Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "logo",
      label: "Website Logo",
      description: 'Appears at the top of every page',
    },
    {
      type: "image",
      name: "background",
      label: "Background Image",
    },
    {
      type: "string",
      name: "url",
      label: "Website URL",
      required: true,
    },
    {
      type: "string",
      name: "newsletter",
      label: "Newsletter Sign Up URL",
    },
    {
      type: "string",
      name: "patron",
      label: "Patron Page URL",
    },
    {
      type: "number",
      name: "paginate",
      label: "Blog Posts Per Page",
      description: 'How many posts to list on the Blog page before you have to click a "next page" button',
    },
    {
      type: "string",
      name: "advanced_footer_html",
      label: "Advanced Footer Code",
      description: 'Useful for putting Google Analytics code or other things like that on every page',
      ui: {
        component: "textarea",
      },
    },
  ],
}