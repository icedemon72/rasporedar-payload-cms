import { type Field } from "payload";

const Button: Field[] = [
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
  {
    name: 'style',
    type: 'select',
    options: ['primary', 'secondary'],
    defaultValue: 'primary',
  },
];

export default Button;
