export const bookLists = {
  format: "md",
  label: "Book Lists",
  name: "book_lists",
  path: "/",
  match: {
    include: "{children,young-adult}",
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
      label: "Page Title",
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'type',
      label: 'Book Type',
      options: [
        {
          value: 'children',
          label: 'Children',
        },
        {
          value: 'young adult',
          label: 'Young Adult',
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Page Text",
      description: "This is the text that appears on the book list page",
      isBody: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      options: [
        {
          value: 'book_list',
          label: 'book_list',
        }
      ],
      ui: {
        description: 'Please keep this as "book_list"',
        defaultItem: 'book_list',
      },
    },
  ],
}