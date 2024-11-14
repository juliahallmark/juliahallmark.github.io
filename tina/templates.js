export function bookFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "type",
      label: "type",
      options: [
        "children",
        "science fiction/fantasy",
        "historical fiction",
        "nonfiction",
      ],
    },
    {
      type: "image",
      name: "cover",
      label: "cover",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
    {
      type: "object",
      name: "buy_links",
      label: "Buy Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "url",
        },
        {
          type: "string",
          name: "color",
          label: "button color",
          options: [
            "red",
            "yellow",
            "blue",
            "teal",
            "white",
            "light gray",
            "dark gray",
            "black",
          ],
        },
      ],
    },
    {
      type: "datetime",
      name: "published",
      label: "publish date",
    },
    {
      type: "number",
      name: "length",
      label: "Number of Pages",
    },
    {
      type: "number",
      name: "age_range",
      label: "age range",
    },
    {
      type: "string",
      name: "blurb",
      label: "blurb",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "post date",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured image",
    },
  ];
}
export function profileFields() {
  return [
    {
      type: "string",
      name: "my_name",
      label: "my name",
    },
    {
      type: "image",
      name: "photo",
      label: "profile picture",
    },
    {
      type: "string",
      name: "email",
      label: "email address",
    },
    {
      type: "object",
      name: "find_me_on",
      label: "external link details",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "url",
        },
      ],
    },
  ];
}
export function site_configFields() {
  return [
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
  ];
}
