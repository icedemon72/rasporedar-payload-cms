import SEO from '@/fields/SEO';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { type CollectionConfig } from 'payload';
import editor from '../Users/access/editor';
import onlyPublished from './access/onlyPublished';
import { removeRelatedFields, rewriteAuthor } from './hooks/afterRead';

export const Blogs: CollectionConfig = {
  slug: 'blogs',
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
  hooks: {
    afterRead: [
      removeRelatedFields,
      rewriteAuthor
    ]
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
        description: 'Unique URL slug for the blog post',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        description: 'Author of the blog post',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', 
      admin: {
        description: 'Featured image for the blog post',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      maxLength: 300,
      admin: {
        description: 'Short summary or excerpt of the blog post',
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
        description: 'Date when the blog post was published',
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
    {
      name: 'relatedBlogs',
      label: 'Related Blogs',
      type: 'relationship',
      relationTo: 'blogs',
      hasMany: true,
      defaultValue: [],
      admin: {
        description: 'Select related blog posts',
        condition: (data) => !!data.title,
      },
    },
    SEO
  ],
};
