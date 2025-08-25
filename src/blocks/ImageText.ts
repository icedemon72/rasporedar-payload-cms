import Priority from "@/fields/Priority";
import { Block } from "payload";

const ImageText: Block = {
  slug: 'image-text',
  labels: {
    singular: 'Image + Text',
    plural: 'Image + Text Sections',
  },
  fields: [
    Priority,
    {
      name: 'imagePosition',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'left',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export default ImageText;