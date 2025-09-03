import { Block } from "payload";

const WYSIWYG: Block = {
  slug: 'wysiwyg',
  labels: {
    singular: 'WYSIWYG',
    plural: 'WYSIWYGs'
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true
    }
  ],
}

export default WYSIWYG;