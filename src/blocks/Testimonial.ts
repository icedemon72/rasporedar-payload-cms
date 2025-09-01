import Priority from "@/fields/Priority";
import { Block } from "payload";

const Testimonial: Block = {
  slug: "testimonial",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  fields: [
    Priority,
    {
      name: "title",
      type: "text",
      required: false,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
    {
      name: "testimonials",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "quote",
          type: "textarea",
          required: true,
        },
        {
          name: "author",
          type: "text",
          required: true,
        },
        {
          name: "role",
          type: "text",
        },
        {
          name: "avatar",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};

export default Testimonial;