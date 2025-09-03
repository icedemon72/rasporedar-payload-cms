import { Block } from "payload";

const FAQList: Block = {
  slug: 'faq-list',
  labels: {
    singular: 'FAQ List',
    plural: 'FAQ Lists',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'groups',
      type: 'array',
      label: 'FAQ Groups',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'faqs',
          type: 'array',
          label: 'Questions',
          minRows: 1,
          fields: [
            {
              name: 'question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              type: 'richText',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default FAQList;