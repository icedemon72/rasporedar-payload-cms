import { Field } from "payload";

export const Footer: Field = {
  name: 'footer',
  type: 'group',
  label: 'Footer',
  fields: [
    {
      name: 'buttonSection',
      type: 'group',
      label: 'Button Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'button',
          type: 'group',
          label: 'Button',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },

    {
      name: 'linksSection',
      type: 'array',
      label: 'Links Section',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'contactSection',
      type: 'array',
      label: 'Contact Section',
      fields: [
        {
          name: 'icon',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: false,
        },
      ],
    },

    {
      name: 'copyright',
      type: 'text',
      required: false,
      admin: {
        description: 'e.g. © 2025 Your Company. All rights reserved.',
      },
    },

    {
      name: 'staticPages',
      type: 'array',
      label: 'Static Pages (e.g., Privacy Policy, Terms)',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'page',
          type: 'text',
        },
      ],
    },
  ],
};
