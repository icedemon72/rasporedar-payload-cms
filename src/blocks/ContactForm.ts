import { Block } from "payload";

const ContactForm: Block = {
  slug: 'contact-form',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'subtitle',
      type: 'richText',
      required: false
    },
    {
      name: 'icons',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload an SVG or image to use as icon',
          },
        },
        {
          name: 'text',
          type: 'richText',
          required: true
        }
      ]
    },
    {
      name: 'tags',
      type: 'array',
      required: false,
      defaultValue: [],
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true
        }
      ]
    },
    
  ],
}

export default ContactForm;