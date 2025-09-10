import SEO from '@/fields/SEO';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { type CollectionConfig } from 'payload';
import editor from '../Users/access/editor';
import onlyPublished from './access/onlyPublished';

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedDate', 'status'],
  },
  access: {
    read: onlyPublished,
    create: editor,
    update: editor,
    delete: editor
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
      admin: {
        description: 'Unique URL slug for the news post',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        description: 'Author of the news post',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', 
      admin: {
        description: 'Featured image for the news post',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      maxLength: 300,
      admin: {
        description: 'Short summary or excerpt of the news post',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({})
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Add tags for categorization',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        description: 'Date when the news post was published',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        description: 'Publication status',
      },
    },
    SEO
  ],
};
