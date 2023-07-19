export const about = {
  format: "md",
  label: "Author Profile",
  name: "about",
  path: "/",
  match: {
    include: "about",
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
      name: "my_name",
      label: "My Name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "photo",
      label: "Profile Picture",
    },
    {
      type: "string",
      name: "email",
      label: "Email Address",
    },
    {
      type: "rich-text",
      name: "body",
      label: "My Details",
      description: "This is the text that appears on the about page",
      isBody: true,
    },
    {
      name: "find_me_on",
      label: "External Link Details",
      type: "object",
      description: 'Details for the "Find me on ..." links in the website footer',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.vendor };
        },
      },
      fields: [
        {
          name: "vendor",
          label: "Vendor",
          type: "string",
          description: 'Fills in the blank "Find me on _____"',
          options: [
            {
              value: 'Facebook',
              label: 'Facebook',
            },
            {
              value: 'Amazon',
              label: 'Amazon.com',
            },
            {
              value: 'BN',
              label: 'Barnes & Noble',
            },
            {
              value: 'Apple',
              label: 'Apple Books',
            },
            {
              value: 'CFP',
              label: 'Christian Faith Publishing',
            },
          ],
        },
        {
          name: "url",
          label: "URL",
          type: "string",
          ui: {
            description: "Where the button links to",
          },
        },
      ],
    },
    {
      name: "layout",
      label: "layout",
      type: "string",
      options: [
        {
          value: 'default',
          label: 'default',
        }
      ],
      ui: {
        description: 'Please keep this as "default"',
        defaultItem: 'default',
      },
    },
  ],
}