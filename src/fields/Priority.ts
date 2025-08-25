import { Field } from "payload";

const Priority: Field = {
  name: "priority",
  type: "select",
  label: "Priority",
  required: true,
  defaultValue: "below",
  options: [
    {
      label: "Above the fold",
      value: "above",
    },
    {
      label: "Below the fold",
      value: "below",
    },
  ],
  admin: {
    description: "Mark whether this block is above or below the fold",
    position: "sidebar",
  },
};

export default Priority;
