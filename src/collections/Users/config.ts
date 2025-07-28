import type { CollectionConfig } from 'payload'
import editor from './access/editor'
import admin from './access/admin'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: editor,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'roles',
      type: 'select',
      defaultValue: ['user'], 
      saveToJWT: true,
      hasMany: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],
    },
        
    // Email added by default
    // Add more fields as needed
  ],
}
