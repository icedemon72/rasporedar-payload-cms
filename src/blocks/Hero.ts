import { Block } from "payload";
import Button from "@/fields/Button";
import Priority from "@/fields/Priority";

const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    Priority,
    {
      name: 'backgroundImage',
      type: 'upload',
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
      type: 'textarea',
    },
    {
      name: 'buttons',
      type: 'array',
      fields: Button,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Upload an SVG or image to use as icon',
      },
    },
  ],
};

export default Hero;
