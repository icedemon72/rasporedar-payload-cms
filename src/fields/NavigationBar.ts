import { Field } from 'payload';

const navLinkField: Field = {
  name: 'links',
  type: 'array',
  label: 'Links',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        description: 'URL to navigate to (optional if dropdown)',
      },
    },
    {
      name: 'isDropdown',
      type: 'checkbox',
      label: 'Is Dropdown',
      defaultValue: false,
      admin: {
        description: 'Check if this link has nested links',
      },
    },
    {
      name: 'links',
      type: 'array',
      label: 'Dropdown Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        condition: (data) => !!data?.isDropdown,
      },
    },
  ],
};

export const NavigationBar: Field = {
  name: 'navigationBar',
  label: 'Navigation Bar',
  type: 'group',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Logo image',
      },
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Navbar title',
      },
    },
    navLinkField, // nested links array
  ],
};