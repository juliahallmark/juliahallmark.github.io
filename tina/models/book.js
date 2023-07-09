export const book = {
  format: "md",
  label: "Books",
  name: "books",
  path: "_books",
  match: {
    include: "**/*",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "blurb",
      label: "Blurb",
      description: "A short sentence about the book",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Full Book Description",
      description: "This is the text that appears on the book page",
      isBody: true,
    },
    {
      type: "string",
      name: "type",
      label: "Book Type",
      description: 'Which list to display the book in',
      options: [
        {
          value: "children",
          label: "Children",
        },
        {
          value: "young adult",
          label: "Young Adult",
        },
      ],
    },
    {
      type: "image",
      name: "cover",
      label: "Cover",
      description: "An image of the book's cover",
    },
    {
      name: "links",
      label: "Buy Links",
      type: "object",
      description: "Links for purchasing this book",
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
          description: "Fills in the blank \"Buy at _____\"",
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
        // {
        //   name: "color",
        //   label: "button color",
        //   type: "string",
        //   options: [
        //     {
        //       value: 'red',
        //       label: 'Red',
        //     },
        //     {
        //       value: 'yellow',
        //       label: 'Yellow',
        //     },
        //     {
        //       value: 'green',
        //       label: 'Green',
        //     },
        //     {
        //       value: 'teal',
        //       label: 'Teal',
        //     },
        //     {
        //       value: 'blue',
        //       label: 'Blue',
        //     },
        //     {
        //       value: 'white',
        //       label: 'White',
        //     },
        //     {
        //       value: 'light gray',
        //       label: 'Light Gray',
        //     },
        //     {
        //       value: 'dark gray',
        //       label: 'Dark Gray',
        //     },
        //     {
        //       value: 'black',
        //       label: 'Black',
        //     },
        //   ],
        // }
      ],
    },
    {
      type: "datetime",
      name: "published",
      label: "Publish Date",
      ui: {
        dateFormat: "MM/DD/YYYY",
        timeFormat: "",
        // display_utc: false,
        // export_format: "YYYY-MM-DDT00:00:00Z"
      }
    },
    {
      name: "length",
      label: "Number of Pages",
      type: "number"
    },
    {
      name: "age_range",
      label: "Age Range",
      type: "number",
      ui: { description: "For ages x and up" },
    },
    {
      name: "layout",
      label: "layout",
      type: "string",
      options: [
        {
          value: 'book',
          label: 'book',
        }
      ],
      ui: {
        description: 'Please keep this as "book"',
        defaultItem: 'book',
      },
    },
  ],
}