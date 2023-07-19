export const posts = {
  format: "md",
  label: "Blog Posts",
  name: "posts",
  path: "_posts",
  match: {
    include: "**/*",
  },
  defaultItem: () => {
    return {
      layout: 'post',
      title: 'New Post',
      date: new Date().toISOString(),
      tags: [],
      featured_image: '',
    }
  },
  ui: {
    filename: {
      readonly: true,
      slugify: (values) => {
        const postDate = new Date(values?.date ?? Date.now());
        const dateFormat = postDate.toISOString().split('T')[0];
        const title = values?.title?.toLowerCase()
          .replace(/[^a-z0-9]/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');
        return dateFormat + '-' + title;
      },
    },
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
      label: "Post Text",
      description: "This is the text of the post",
      isBody: true,
    },
    {
      type: "image",
      name: "featured_image",
      label: "Featured image",
      description: "An image to display at the top of a post",
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