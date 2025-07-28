import { type Field } from "payload";

const SEO: Field = {
  name: 'seo',
  label: 'SEO',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Meta Title',
      maxLength: 70,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Meta Description',
      maxLength: 160,
      admin: {
        description: 'Maximum character length is 160'
      },
    },
    {
      name: 'robots',
      type: 'text',
      label: 'Robots',
      maxLength: 50,
      defaultValue: 'index,follow'
    },
    {
      name: 'keywords',
      type: 'text',
      label: 'Meta Keywords',
      admin: {
        description: 'Comma-separated keywords',
      }
    },
    {
      name: 'openGraph',
      label: 'Open Graph',
      type: 'group',
      fields: [
        {
          name: 'images',
          label: 'Images',
          type: 'upload',
          relationTo: 'media',
          required: false,
        }
      ]
    }
  ],
};

export default SEO;
