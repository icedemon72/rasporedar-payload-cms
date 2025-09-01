import { Footer } from '@/fields/Footer';
import { NavigationBar } from '@/fields/NavigationBar';
import { apiKeyAccess } from '@/utils/auth';
import { type CollectionConfig } from 'payload';

export const SiteSettings: CollectionConfig = {
  slug: 'site-settings',
  labels: {
    singular: 'Site Settings',
    plural: 'Site Settings',
  },
  access: {
    read: apiKeyAccess,
    update: ({ req }) => req.user?.collection === 'users',
    create: () => false,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'siteName',
    group: 'Settings',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    NavigationBar,
    Footer,
  ],
};
