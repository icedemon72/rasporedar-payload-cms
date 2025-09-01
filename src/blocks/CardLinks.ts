import Priority from "@/fields/Priority";
import { Block } from "payload";

const CardLinks: Block = {
  slug: 'card_link',
  labels: {
    singular: 'Card Link',
    plural: 'Card Links'
  },
  fields: [
    Priority,
    {
      name: "title",
      type: "text",
      required: false,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
    {
      label: 'Card Links',
      name: 'card_links',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true
        },
        {
          name: 'description',
          type: 'text',
          required: false
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          label: 'URL',
          name: 'url',
          type: 'text',
          required: true
        }
      ]
    }
  ]
}

export default CardLinks;