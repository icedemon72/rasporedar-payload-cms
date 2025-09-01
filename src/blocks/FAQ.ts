import { Block } from "payload";
import Accordion from "./Accordion";

const FAQ: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'richText',
      required: true
    },
    {
      name: 'accordion',
      type: 'blocks',
      minRows: 1,
      maxRows: 1,
      blocks: [
        Accordion,
      ],
    },
  ],
};

export default FAQ;