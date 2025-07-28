import { type CollectionConfig } from 'payload';
import Hero from '../blocks/Hero';
import SEO from '../fields/SEO';
import { apiKeyAccess } from '@/utils/auth';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: apiKeyAccess, 
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    SEO, 
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Hero],
    },
  ],
};