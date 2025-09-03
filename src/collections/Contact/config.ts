import { CollectionConfig } from 'payload';

export const Contact: CollectionConfig = {
  slug: 'contact',
  labels: {
    singular: 'Contact Log',
    plural: 'Contact Logs'
  },
  access: {
    create: () => true, 
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'reason',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
};
