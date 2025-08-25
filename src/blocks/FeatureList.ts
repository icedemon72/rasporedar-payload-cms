import Priority from "@/fields/Priority";
import { Block } from "payload";

const FeatureList: Block = {
  slug: 'feature-list',
  labels: {
    singular: 'Feature List',
    plural: 'Feature Lists',
  },
  fields: [
    Priority,
    {
      name: 'sectionTitle',
      type: 'text',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default FeatureList;