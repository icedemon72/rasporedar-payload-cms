import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: '/media',
  },
  custom: {
    cacheControl: 'public, max-age=3600, stale-while-revalidate=3600, stale-if-error=86400',
  },
}
