import Priority from "@/fields/Priority";
import { Block } from "payload";

const Testimonial: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  fields: [
    Priority,
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Testimonial;