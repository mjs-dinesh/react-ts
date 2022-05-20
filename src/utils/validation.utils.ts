import * as yup from "yup";

export const test = yup.object({
  name: yup.string().required("Please enter name"),
});

// _NV_
