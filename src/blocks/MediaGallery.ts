import Priority from "@/fields/Priority";
import { Block } from "payload";

const MediaGallery: Block = {
  slug: 'media-gallery',
  labels: {
    singular: 'Media Gallery',
    plural: 'Media Galleries',
  },
  fields: [
    Priority,
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
};

export default MediaGallery;