import { Block } from "payload";
import Button from "@/fields/Button";
import Priority from "@/fields/Priority";

const CallToAction: Block = {
  slug: 'call-to-action',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    Priority,
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'buttons',
      type: 'array',
      fields: Button,
    },
    {
      label: 'Background Image',
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'cards',
      type: 'array',
      required: false,
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
      ]
    }
  ],
};

export default CallToAction;