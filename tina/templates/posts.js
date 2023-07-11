export const posts = {
  format: "md",
  label: "Blog Posts",
  name: "posts",
  path: "_posts",
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
      type: "datetime",
      name: "date",
      label: "Post Date",
      ui: {
        dateFormat: "MM/DD/YYYY",
        timeFormat: "",
        // display_utc: false,
        // export_format: "YYYY-MM-DDT00:00:00Z"
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Full Book Description",
      description: "This is the text that appears on the book page",
      isBody: true,
    },
    {
      type: "image",
      name: "cover",
      label: "Cover",
      description: "An image of the book's cover",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      description: "Words or short phrases to categorize posts",
      list: true,
    },
    {
      name: "layout",
      label: "layout",
      type: "string",
      options: [
        {
          value: 'post',
          label: 'post',
        }
      ],
      ui: {
        description: 'Please keep this as "post"',
        defaultItem: 'post',
      },
    },
  ],
}